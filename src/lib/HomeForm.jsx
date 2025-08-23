// "use server";

// import { sendmail } from "./sendmail";

// export const sendContactForm = async (
//   name = "",
//   email = "",
//   phone = "",
//   message = "",
// ) => {
//   try {
//     await sendmail({
//       to: "lead@spmedifort.com",
//       name: name,
//       subject: `Contact Form Submission From Home Page`,
//       body: `
//         <div>
//           <h3>Name: ${name}</h3>
//           <h3>Email: ${email}</h3>
//           <h3>Phone: ${phone}</h3>
//           <h3>Message: ${message}</h3>
//         </div>
//       `,
//     });

//     return true; // Email sent successfully
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return false; // Failed to send email
//   }
// };
export const sendContactForm = async (
  name = "",
  email = "",
  phone = "",
  message = ""
) => {
  try {
    const response = await fetch(
      "https://spmedifort.com/news-and-resources/wp-json/custom/v1/submit-contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send contact form");
    }

    return true; // Form submitted successfully
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return false; // Failed to submit form
  }
};
