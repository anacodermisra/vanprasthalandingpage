# =========================================================================
# VANPRASTHA CORPORATE RETREAT: 24/7 SUPABASE DATABASE SCHEMA
# Run this script in the Supabase SQL Editor (https://app.supabase.com)
# =========================================================================

CREATE TABLE IF NOT EXISTS retreat_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    full_name TEXT NOT NULL,
    whatsapp_phone TEXT NOT NULL,
    work_email TEXT NOT NULL,
    company_name TEXT DEFAULT '',
    designation TEXT DEFAULT '',
    booking_type TEXT CHECK (booking_type IN ('individual', 'corporate_team')) DEFAULT 'individual',
    team_size INT DEFAULT 1,
    preferred_cohort TEXT CHECK (preferred_cohort IN ('batch_1', 'batch_2', 'flexible')) DEFAULT 'flexible',
    room_preference TEXT CHECK (room_preference IN ('double', 'triple', 'quad', 'corporate')) DEFAULT 'double',
    notes TEXT DEFAULT '',
    utm_source TEXT DEFAULT 'meta_ads',
    status TEXT DEFAULT 'new_inquiry' CHECK (status IN ('new_inquiry', 'contacted', 'shortlisted', 'confirmed', 'closed'))
);

-- Index for speedy queries by status and date
CREATE INDEX IF NOT EXISTS idx_retreat_leads_status ON retreat_leads (status);
CREATE INDEX IF NOT EXISTS idx_retreat_leads_created_at ON retreat_leads (created_at DESC);

-- Enable Row Level Security (RLS) for data protection
ALTER TABLE retreat_leads ENABLE ROW LEVEL SECURITY;

-- Allow insert from anon key (for web form submissions)
CREATE POLICY "Allow public insert to retreat_leads"
ON retreat_leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow select/update only to service_role (Admin/Dashboard access)
CREATE POLICY "Allow full access to service_role"
ON retreat_leads FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Comments for documentation
COMMENT ON TABLE retreat_leads IS 'Stores leads and inquiries for The CEO Within Corporate Rejuvenation Retreat at Vanprastha Resorts, Dunagiri';
