// "use server";

// import { sendmail } from "./sendmail";

// export const sendContactForm = async (
//   name = "",
//   email = "",
//   phone = "",
//   message = "",
//   department_name = "",
//   department_url = ""
// ) => {
//   try {
//     await sendmail({
//       to: "lead@spmedifort.com",
//       name: name,
//       subject: `Contact Form Submission From ${department_name}`,
//       body: `
//         <div>
//           <h3>Enquiry For: ${department_name}</h3>
//           <h3>Page URL: ${department_url}</h3>
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
