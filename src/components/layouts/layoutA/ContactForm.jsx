"use client";
import { sendContactForm } from "@/lib/ContactForm";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { contactFormSubmission } from "@/lib/contactFormSubmission";
import { usePathname } from "next/navigation";

const ContactForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [message, setMessage] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [phoneError, setPhoneError] = useState(null);
    const pathname = usePathname();
    const params = pathname.split('/')
    const capitalizedDepartmentName = params[2];
    const department_name = capitalizedDepartmentName.charAt(0).toUpperCase() + capitalizedDepartmentName.slice(1);

    //   console.log(department_name,"department_name");
    const department_url = `https://spmedifort.com${pathname}`
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setPhoneError(null);

        if (!phone || phone.length !== 10 || isNaN(Number(phone))) {
            setPhoneError("Phone number must be exactly 10 digits.");
            return;
        }

        setSubmitting(true);

        const response = await contactFormSubmission(
            name,
            phone,
            email,
            message,
            department_name,
            department_url
        );

        if (response.status === 200) {
            // const emailSent = await sendContactForm(
            //     name || undefined,
            //     email || undefined,
            //     phone || undefined,
            //     message || undefined,
            //     department_name || undefined,
            //     department_url || undefined
            // );

            // if (emailSent) {
                setSubmitting(false);
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");

                Swal.fire({
                    title: "Success!",
                    text: "Our team will reach you soon! Thanks",
                    icon: "success",
                });
            // } else {
            //     setSubmitting(false);
            //     Swal.fire({
            //         title: "Failed!",
            //         text: "Form Submission Failed!",
            //         icon: "error",
            //     });
            // }
        } else {
            setSubmitting(false);
            Swal.fire({
                title: "Failed!",
                text: "Form Submission Failed!",
                icon: "error",
            });
        }
    };

    return (
        <div className="relative p-3 border-primary  dark:bg-dark-2 ">
            <form onSubmit={handleContactSubmit}>
                <div className="mb-6">
                    <input
                        type="text"
                        required
                        name="name"
                        value={name || ""}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="email"
                        required
                        name="email"
                        value={email || ""}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
                    />
                </div>
                <div className="mb-6">
                    <div className=" flex gap-2 w-full">
                        <input
                            type="text"
                            required
                            name="phone"
                            value={phone || ""}
                            placeholder="Your Phone"
                            onChange={(e) => setPhone(e.target.value)}
                            className="dark:border-dark-3 border-gray-300 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
                        />
                    </div>
                    {phoneError && <p className="text-red-600 mt-2 pl-2">{phoneError}</p>}
                </div>
                <div className="mb-6">
                    <textarea
                        rows={6}
                        required
                        name="message"
                        value={message || ""}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message"
                        className="border-gray-300 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded-xl shadow-md border py-3 px-[14px] text-base outline-none"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full text-base text-white bg-[#232c77] font-bold p-3 transition border shadow-lg rounded-full bg-primary hover:bg-opacity-60"
                        disabled={submitting}
                    >
                        {submitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
