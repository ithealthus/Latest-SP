import { NextResponse } from "next/server";

export async function POST() {
  const { CLIENT_ID, CLIENT_SECRET, NEXT_PUBLIC_API_BASE } = process.env;

  try {
    const response = await fetch(`${NEXT_PUBLIC_API_BASE}/api/v1/web-site-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          grant_type: "client_credentials",
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: errorText }, { status: response.status });
    }

    const data = await response.json();

    // Adjust if your token is inside data.responseArray or data directly
    return NextResponse.json({ access_token: data.responseArray.access_token });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
