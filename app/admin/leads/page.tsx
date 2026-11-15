"use client";

import React, { useState, useEffect } from "react";
import { Download, Users, RefreshCw, Key, ShieldCheck } from "lucide-react";

interface Lead {
  id: string;
  created_at: string;
  full_name: string;
  whatsapp_phone: string;
  work_email: string;
  company_name?: string;
  preferred_cohort: string;
  room_preference: string;
  booking_type: string;
  team_size: number;
  status: string;
  utm_source?: string;
}

export default function AdminLeadsPage() {
  const [key, setKey] = useState("vanprastha2026");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const fetchLeads = async (authKey: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/leads?key=${encodeURIComponent(authKey)}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to load leads");
      }
      setLeads(data.leads || []);
      setAuthenticated(true);
    } catch (err: any) {
      setError(err.message || "Invalid passkey");
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads(key);
  }, []);

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = [
      "ID",
      "Date",
      "Name",
      "Phone",
      "Email",
      "Company",
      "Cohort",
      "Room",
      "Type",
      "Team Size",
      "Source",
    ];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.created_at).toLocaleString("en-IN"),
      `"${l.full_name}"`,
      `"${l.whatsapp_phone}"`,
      `"${l.work_email}"`,
      `"${l.company_name || ""}"`,
      l.preferred_cohort,
      l.room_preference,
      l.booking_type,
      l.team_size,
      l.utm_source || "",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `retreat_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1B3022] p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#D4AF37]/30">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Vanprastha Retreats · Almora
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1B3022] mt-1">
              Executive Leads &amp; Registrations Portal
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchLeads(key)}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#D4AF37]/40 text-xs font-semibold hover:bg-neutral-50 shadow-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={exportCSV}
              disabled={leads.length === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#1B3022] text-xs font-semibold hover:bg-[#C29B27] shadow-sm disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CSV</span>
            </button>
          </div>
        </div>

        {/* Passkey Bar */}
        <div className="my-6 p-4 rounded-xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Key className="w-4 h-4 text-[#D4AF37]" />
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Admin Passkey"
              className="px-3 py-1.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <button
              onClick={() => fetchLeads(key)}
              className="px-3 py-1.5 rounded-lg bg-[#1B3022] text-white text-xs font-semibold"
            >
              Verify
            </button>
          </div>

          <div className="text-xs text-neutral-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Authorized: <strong>9310312404</strong> &amp; Retreat Desk</span>
          </div>
        </div>

        {error && (
          <div className="p-4 mb-6 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#D4AF37]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#1B3022]">
                Total Leads: {leads.length}
              </h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF8F4] text-xs font-bold text-neutral-600 border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">WhatsApp Phone</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Company</th>
                  <th className="py-3 px-4">Cohort</th>
                  <th className="py-3 px-4">Room</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-neutral-400">
                      No leads recorded yet.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3 px-4 text-xs text-neutral-500 whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="py-3 px-4 font-semibold text-[#1B3022]">
                        {lead.full_name}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs">
                        <a
                          href={`https://wa.me/${lead.whatsapp_phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 hover:underline font-semibold"
                        >
                          {lead.whatsapp_phone}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-xs text-neutral-600">
                        <a href={`mailto:${lead.work_email}`} className="hover:underline">
                          {lead.work_email}
                        </a>
                      </td>
                      <td className="py-3 px-4 text-xs text-neutral-700">
                        {lead.company_name || "—"}
                      </td>
                      <td className="py-3 px-4 text-xs">
                        <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#1B3022] font-semibold text-[11px]">
                          {lead.preferred_cohort}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-xs capitalize text-neutral-600">
                        {lead.room_preference}
                      </td>
                      <td className="py-3 px-4">
                        <a
                          href={`https://wa.me/${lead.whatsapp_phone.replace(/[^0-9]/g, "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700"
                        >
                          Chat
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
