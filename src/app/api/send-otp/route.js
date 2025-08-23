// import { NextResponse } from 'next/server';
// import crypto from 'crypto';

// export async function POST(request) {
//     try {
//         const { mobile_number, visit_id, country_dial_code, token } = await request.json();
//         console.log(mobile_number, visit_id, country_dial_code, token, "mobile_number, visit_id, country_dial_code token");

//         if (!mobile_number) {
//             return NextResponse.json({ error: 'Mobile number is required' }, { status: 400 });
//         }

//         const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
//         if (!BASE_URL) {
//             return NextResponse.json({ error: 'Missing API base URL' }, { status: 500 });
//         }
//         // console.log();

//         const publicKey = process.env.PUBLIC_KEY;
//         if (!publicKey) {
//             return NextResponse.json({ error: 'Missing PUBLIC_KEY in .env' }, { status: 500 });
//         }
//         // console.log(publicKey, "publicKey");

//         // Encrypt mobile number
//         const buffer = Buffer.from(mobile_number, 'utf8');
//         // console.log(buffer, "buffer");

//         const encryptedMobile = crypto.publicEncrypt(
//             {
//                 key: publicKey,
//                 padding: crypto.constants.RSA_PKCS1_PADDING,
//             },
//             buffer
//         ).toString('base64');
//         console.log(encryptedMobile, "encryptedMobile danish");

//         // Call OTP API
//         const res = await fetch(`${BASE_URL}/api/v1/booking-otp`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`, // <- this might be required
//             },
//             body: JSON.stringify({
//                 data: {
//                     mobile_number: encryptedMobile,
//                     visit_id,
//                     country_dial_code,
//                 },
//             }),
//         });

//         // console.log(res, "res danish dahisha");

//         if (!res.ok) {
//             const errorText = await res.text();
//             return NextResponse.json({ error: 'Failed to send OTP', details: errorText }, { status: res.status });
//         }

//         const data = await res.json();
//         // delete data.otp;
//         return NextResponse.json(data);

//     } catch (error) {
//         return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
//     }
// }

import { NextResponse } from "next/server";
import crypto from "crypto";

function encryptRSA(text, publicKey) {
  return crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // ✅ OAEP padding
      oaepHash: "sha1", // ✅ match your working test script
    },
    Buffer.from(text, "utf8")
  ).toString("base64");
}

export async function POST(request) {
  try {
    const { mobile_number, visit_id, country_dial_code, token } = await request.json();
    console.log(mobile_number, visit_id, country_dial_code, token, "inputs");

    if (!mobile_number) {
      return NextResponse.json({ error: "Mobile number is required" }, { status: 400 });
    }

    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;
    const PUBLIC_KEY = process.env.PUBLIC_KEY?.replace(/\\n/g, "\n"); 
    // 🔹 handle PEM formatting with newlines

    if (!BASE_URL || !PUBLIC_KEY) {
      return NextResponse.json({ error: "Missing BASE_URL or PUBLIC_KEY" }, { status: 500 });
    }

    const encryptedMobile = encryptRSA(mobile_number, PUBLIC_KEY);
    console.log(encryptedMobile, "encryptedMobile (send-otp)");

    const res = await fetch(`${BASE_URL}/api/v1/booking-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        data: {
          mobile_number: encryptedMobile,
          visit_id,
          country_dial_code,
        },
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: "Failed to send OTP", details: errorText },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}
