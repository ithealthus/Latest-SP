import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { token, branch_id, date, page, page_count, department_id, doctor_id } = await request.json();
    // console.log(token, branch_id, date, page, page_count, department_id, doctor_id, "log:token, branch_id, date, page, page_count, department_id, doctor_id");

    if (!token) {
      return NextResponse.json({ error: "No token provided" }, { status: 401 });
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
    // console.log(BASE_URL, "BASE_URL");

    if (!BASE_URL) {
      return NextResponse.json({ error: "Missing API base URL" }, { status: 500 });
    }

    // 1️⃣ Fetch doctor consultation availability
    const visitRes = await fetch(
      `${BASE_URL}/api/v1/doctor-consultation-available-in-date?department_id=${department_id}&doctor_id=${doctor_id}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          branch_id,
          data: { date, page, page_count },
        }),
      }
    );
    // console.log(visitRes, "visitRes");

    if (!visitRes.ok) {
      const errorText = await visitRes.text();
      return NextResponse.json(
        { error: "Failed to fetch doctor visits", details: errorText },
        { status: visitRes.status }
      );
    }

    const visitData = await visitRes.json();

    // Pick first visit_id (you can adjust if multiple)
    const visit = visitData?.data?.[0]?.visits?.[0];
    if (!visit?.visit_id) {
      return NextResponse.json({ message: "No visit found", visits: [], slots: [] });
    }

    // 2️⃣ Fetch slots using visit_id
    const slotRes = await fetch(`${BASE_URL}/api/v1/get-tokens-against-visit-detail`, {
      method: "POST",
      headers: {
         Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { visit_id: visit.visit_id } }),
    });
    console.log({ visit_id: visit.visit_id });

    if (!slotRes.ok) {
      const errorText = await slotRes.text();
      return NextResponse.json(
        { error: "Failed to fetch slots", details: errorText },
        { status: slotRes.status }
      );
    }

    const slotData = await slotRes.json();

    // 3️⃣ Combine doctor visits + slots
    return NextResponse.json({
      visits: visitData.data || [],
      slots: slotData.data || [],
    });
  } catch (error) {
    console.error("doctor-slots API error:", error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
