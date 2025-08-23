import { NextResponse } from 'next/server';
import crypto from 'crypto';

// 🔐 RSA Encrypt Helper (same everywhere)
function encryptRSA(value, publicKey) {
  return crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha1', // ✅ same as working OTP encryption
    },
    Buffer.from(value, 'utf8')
  ).toString('base64');
}

export async function POST(request) {
  try {
    const {
      visit_id,
      mobile_number,
      otp,
      op_number,
      email,
      address,
      dToken,
      token,
      age,
      date,
      gender,
      patient_name,
      is_web_booking,
      telemedicine,
      telemedicine_mobile_user,
      country_dial_code,
    } = await request.json();

    console.log(
      visit_id,
      mobile_number,
      otp,
      op_number,
      email,
      address,
      token,
      age,
      date,
      gender,
      patient_name,
      is_web_booking,
      telemedicine,
      telemedicine_mobile_user,
      country_dial_code,
      ' confirm-booking inputs'
    );

    if (!mobile_number || !otp) {
      return NextResponse.json(
        { error: 'Mobile number and OTP are required' },
        { status: 400 }
      );
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
    if (!BASE_URL) {
      return NextResponse.json(
        { error: 'Missing API base URL' },
        { status: 500 }
      );
    }

    let publicKey = process.env.PUBLIC_KEY;
    if (!publicKey) {
      return NextResponse.json(
        { error: 'Missing PUBLIC_KEY in .env' },
        { status: 500 }
      );
    }

    // 🔹 Fix PEM formatting if coming from .env
    publicKey = publicKey.replace(/\\n/g, '\n');

    // Encrypt mobile_number & otp
    const encryptedMobile = encryptRSA(mobile_number, publicKey);
    const encryptedOtp = encryptRSA(otp, publicKey);

    // Call Confirm Booking API
    const res = await fetch(`${BASE_URL}/api/v1/confirm-booking`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // if needed
      },
      body: JSON.stringify({
        data: {
          visit_id,
          mobile_number: encryptedMobile,
          otp: encryptedOtp,
          op_number,
          email,
          address,
          token: dToken,
          age,
          date,
          gender,
          patient_name,
          is_web_booking,
          telemedicine,
          telemedicine_mobile_user,
          country_dial_code,
        },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: 'Failed to confirm booking', details: errorText },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Confirm booking error:', error);
    return NextResponse.json(
      { error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
