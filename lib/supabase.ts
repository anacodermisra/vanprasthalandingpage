import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseUrl.startsWith("http") && supabaseKey
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export async function getLeads(): Promise<RetreatLead[]> {
  // 1. Try Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("retreat_leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        return data as RetreatLead[];
      }
    } catch (err: any) {
      console.error("Supabase fetch error:", err.message);
    }
  }

  // 2. Fallback to local store
  try {
    const filePath = path.join(process.cwd(), "data", "leads.json");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(content);
    }
  } catch (err: any) {
    console.error("Local leads read error:", err.message);
  }

  return [];
}

export interface RetreatLead {
  id?: string;
  created_at?: string;
  full_name: string;
  whatsapp_phone: string;
  work_email: string;
  company_name?: string;
  designation?: string;
  booking_type: "individual" | "corporate_team";
  team_size: number;
  preferred_cohort: "batch_1" | "batch_2" | "flexible";
  room_preference: "double" | "triple" | "quad" | "corporate";
  notes?: string;
  utm_source?: string;
  status?: string;
}

/**
 * Saves lead into persistent 24/7 Supabase cloud database.
 * If Supabase environment keys are pending, gracefully falls back to persistent storage.
 */
export async function saveLead(lead: RetreatLead): Promise<{
  success: boolean;
  leadId: string;
  source: "supabase" | "fallback_store";
  error?: string;
}> {
  const timestamp = new Date().toISOString();
  const leadWithMeta = {
    ...lead,
    created_at: timestamp,
    status: "new_inquiry",
    utm_source: lead.utm_source || "landing_page",
  };

  // 1. Try 24/7 Cloud Supabase
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from("retreat_leads")
        .insert([leadWithMeta])
        .select();

      if (error) {
        console.error("Supabase insert error:", error);
      } else if (data && data.length > 0) {
        return {
          success: true,
          leadId: data[0].id || `supa_${Date.now()}`,
          source: "supabase",
        };
      }
    } catch (err: any) {
      console.error("Supabase connection exception:", err.message);
    }
  }

  // 2. Safe Fallback Store
  try {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    const filePath = path.join(dataDir, "leads.json");
    let leadsList: any[] = [];

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      try {
        leadsList = JSON.parse(content);
      } catch {
        leadsList = [];
      }
    }

    const fallbackId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    leadsList.unshift({ id: fallbackId, ...leadWithMeta });
    fs.writeFileSync(filePath, JSON.stringify(leadsList, null, 2), "utf-8");

    return {
      success: true,
      leadId: fallbackId,
      source: "fallback_store",
    };
  } catch (err: any) {
    console.error("Fallback storage error:", err);
    return {
      success: false,
      leadId: "",
      source: "fallback_store",
      error: err.message,
    };
  }
}

export async function deleteLead(id: string): Promise<boolean> {
  if (supabase) {
    try {
      await supabase.from("retreat_leads").delete().eq("id", id);
    } catch (err: any) {
      console.error("Supabase delete error:", err.message);
    }
  }

  try {
    const filePath = path.join(process.cwd(), "data", "leads.json");
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      let leads = JSON.parse(content);
      if (Array.isArray(leads)) {
        leads = leads.filter((l: any) => l.id !== id);
        fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
        return true;
      }
    }
  } catch (err: any) {
    console.error("Local leads delete error:", err.message);
  }

  return true;
}
