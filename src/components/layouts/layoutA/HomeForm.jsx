import React, { useState } from "react";
import Swal from "sweetalert2";
import { contactFormSubmission } from "@/lib/homeFormSubmission"; // Uncomment and fix path
import {sendContactForm} from '@/lib/HomeForm'

const HomeForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [phoneError, setPhoneError] = useState(null);
  const [agreeError, setAgreeError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setPhoneError(null);
    setAgreeError(null);

    if (!phone || phone.length !== 10 || isNaN(Number(phone))) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    if (!agree) {
      setAgreeError("You must agree to the Terms & Conditions.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await contactFormSubmission(name, phone, email, message);

      if (response.status === 200) {
        // const emailSent = await sendContactForm(name, email, phone, message);

        // if (emailSent) {
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setAgree(false);

          Swal.fire({
            title: "Success!",
            text: "Our team will reach you soon! Thanks",
            icon: "success",
          });
        // } else {
        //   throw new Error("Email failed");
        // }
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      Swal.fire({
        title: "Failed!",
        text: "Form Submission Failed!",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleContactSubmit}
        className="space-y-4 bg-white p-8 rounded-2xl shadow-xl max-w-xl my-4 mx-auto"
      >
        <h2 className="text-2xl font-bold text-center text-[#72005F]">Contact Now</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full px-5 py-3 rounded-full text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#72005F]"
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Mobile"
          required
          className="w-full px-5 py-3 rounded-full text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#72005F]"
        />
        {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full px-5 py-3 rounded-full text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#72005F]"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message Here"
          rows="4"
          required
          className="w-full px-5 py-3 rounded-xl text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#72005F]"
        ></textarea>

        <div className="flex items-start gap-3">
          <input
            className="mt-1"
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I agree to the{" "}
            <span className="text-[#72005F] font-medium">Terms & Conditions</span> and{" "}
            <span className="text-[#72005F] font-medium">Privacy Policy</span>, and I consent to
            receive updates via SMS/Email.
          </label>
        </div>
        {agreeError && <p className="text-red-600 text-sm">{agreeError}</p>}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full px-6 py-3 rounded-full font-semibold transition ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#72005F] text-white hover:bg-[#5a004b]"
          }`}
        >
          {submitting ? "Submitting..." : "Submit Now"}
        </button>
      </form>
    </div>
  );
};

export default HomeForm;
