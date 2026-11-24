import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Cache-Control": "no-store, max-age=0",
};

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      service: "vanprastha-retreat",
    },
    {
      status: 200,
      headers: SECURITY_HEADERS,
    }
  );
}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: SECURITY_HEADERS,
  });
}
