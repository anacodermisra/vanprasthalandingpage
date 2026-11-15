# Deployment Guide for Vanprastha Retreat Landing Page

## ✅ What's Ready

### 1. Code Repository
- **GitHub**: `https://github.com/anacodermisra/vanprasthalandingpage`
- Branch: `main`
- Root Directory: `landing-page/`

### 2. Build Configuration
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Runtime**: Node.js 18
- **Root Directory**: `landing-page`

### 3. Environment Variables Needed

In your Render Dashboard → Service → Environment tab, add these:

| Key | Value | Description |
|-----|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your-anon-key-here` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | `your-service-role-key-here` | Your Supabase service role key |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | `919650102777` | Already set in render.yaml |

### 4. Render.yaml (Auto-deploy ready)
The `render.yaml` file is committed to your repo. You can also deploy using this file:
```yaml
services:
  - type: web
    name: vanprastha-retreat
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_VERSION
        value: "18"
      - key: NEXT_PUBLIC_SUPABASE_URL
        sync: false
      - key: NEXT_PUBLIC_SUPABASE_ANON_KEY
        sync: false
      - key: SUPABASE_SERVICE_ROLE_KEY
        sync: false
      - key: NEXT_PUBLIC_WHATSAPP_PHONE
        value: "919650102777"
```

## 🚀 Quick Deployment Steps

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click "New +" → "Web Service"**
3. **Connect GitHub** → Select `anacodermisra / vanprasthalandingpage`
4. **Fill in the form**:
   - Name: `vanprastha-retreat`
   - Root Directory: `landing-page`
   - Branch: `main`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Runtime: Node 18
5. **Add Environment Variables** (see table above)
6. **Click "Deploy web service"**

## 🌐 After Deployment

- Your site will be available at: `https://vanprastha-retreat.onrender.com`
- The `/api/leads` endpoint will persist leads to Supabase
- The form will auto-redirect to WhatsApp with pre-filled context

## 🔧 Supabase Setup (Required)

1. Go to https://supabase.com → Create new project
2. Run the schema from `landing-page/supabase_schema.sql`
3. Copy the keys to your Render environment variables

---

**Need help with Supabase setup? Let me know!**