import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.formData();

  const res = await fetch("https://www.form-to-email.com/api/s/obPJG3qjVMAV", {
    method: "POST",
    body,
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
