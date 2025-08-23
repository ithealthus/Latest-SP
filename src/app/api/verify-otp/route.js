import { NextResponse } from 'next/server';
import crypto from 'crypto';

// 🔐 RSA Encrypt Helper (same as send-otp)
function encryptRSA(text, publicKey) {
  return crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha1', // ✅ same as test script & send-otp
    },
    Buffer.from(text, 'utf8')
  ).toString('base64');
}

export async function POST(request) {
  try {
    const { visit_id, mobile_number, otp, token } = (await request.json()).data;
    console.log(visit_id, mobile_number, otp, token, "verify-otp inputs");

    if (!visit_id || !mobile_number || !otp || !token) {
      return NextResponse.json(
        { error: 'visit_id, mobile_number, otp, and token are required' },
        { status: 400 }
      );
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
    const PUBLIC_KEY = process.env.PUBLIC_KEY?.replace(/\\n/g, '\n'); 
    // 🔹 ensures PEM formatting works

    if (!BASE_URL || !PUBLIC_KEY) {
      return NextResponse.json(
        { error: 'Missing API base URL or PUBLIC_KEY' },
        { status: 500 }
      );
    }

    // Step 1: Verify OTP
    const otpRes = await fetch(`${BASE_URL}/api/v1/verify-otp`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { visit_id, mobile_number, otp } }),
    });

    const otpData = await otpRes.json();
    console.log(otpData, "otpData");

    if (!otpRes.ok) {
      return NextResponse.json(
        { error: 'OTP verification failed', details: otpData },
        { status: otpRes.status }
      );
    }

    // Step 2: Encrypt for patient-basic-details API
    const encryptedMobile = encryptRSA(mobile_number, PUBLIC_KEY);
    const encryptedOtp = encryptRSA(otp, PUBLIC_KEY);
console.log(encryptedMobile,encryptedOtp,"dsasdas encryptedOtp");

    const patientRes = await fetch(`${BASE_URL}/api/v1/patient-basic-details`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          visit_id,
          mobile_number: encryptedMobile,
          otp: encryptedOtp,
        },
      }),
    });

    const patientData = await patientRes.json();

    if (!patientRes.ok) {
      return NextResponse.json(
        { error: 'Fetching patient list failed', details: patientData },
        { status: patientRes.status }
      );
    }

    return NextResponse.json({
      message: 'OTP verified and patient list fetched successfully',
      otpVerification: otpData,
      patients: patientData,
    });
  } catch (error) {
    console.error('Error verifying OTP or fetching patients:', error);
    return NextResponse.json(
      { error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
