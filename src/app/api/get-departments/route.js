import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { token, branch_id } = await request.json();

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

    if (!BASE_URL) {
      return NextResponse.json({ error: 'Missing API base URL' }, { status: 500 });
    }

    const res = await fetch(`${BASE_URL}/api/v1/list-departments-by-branch`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ branch_id }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: 'Failed to fetch departments', details: errorText },
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
