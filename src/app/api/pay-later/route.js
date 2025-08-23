import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { transaction_id, is_free_visit, token } = await request.json();

        if (!transaction_id) {
            return NextResponse.json({ error: 'Transaction ID is required' }, { status: 400 });
        }

        const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
        if (!BASE_URL) {
            return NextResponse.json({ error: 'Missing API base URL' }, { status: 500 });
        }

        // Call Pay Later API
        const res = await fetch(`${BASE_URL}/api/v1/booking-pay-later`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // if API requires it
            },
            body: JSON.stringify({
                data: {
                    transaction_id,
                    is_free_visit,
                },
            }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            return NextResponse.json({ error: 'Failed to process Pay Later', details: errorText }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
    }
}
