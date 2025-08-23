import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { token, branch_id, date, page , page_count, department_id , doctor_id } = await request.json();
// console.log( token, branch_id, date, page , page_count, department_id , doctor_id," token, branch_id, date, page , page_count, department_id , doctor_id");

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

    if (!BASE_URL) {
      return NextResponse.json({ error: 'Missing API base URL' }, { status: 500 });
    }

    const res = await fetch(
      `${BASE_URL}/api/v1/doctor-consultation-available-in-date?department_id=${department_id}&doctor_id=${doctor_id}`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          branch_id,
          data: {
            date,
            page,
            page_count
          }
        }),
      }
    );
// console.log(res,"dsadsa");

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: 'Failed to fetch doctor visits', details: errorText },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);

  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
