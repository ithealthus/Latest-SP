"use client";
import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://spmedifort.com/news-and-resources/wp-json/custom/v1/submit-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("✅ Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f4e0e0] py-10 px-5 md:px-32 max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center border-b-[32px] border-primary">
      {/* Left Content */}
      <div>
        <button className="border-4 border-primary text-primary text-semibold px-4 py-2 rounded-lg mb-6">
          Home &gt; Second Opinion
        </button>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Get a Trusted Second Opinion <br /> at SP Medifort Hospital
        </h2>
        <p className="text-black leading-relaxed">
          When it comes to your health, every decision matters. At SP Medifort, Kerala’s first JCI-accredited multispecialty hospital, we combine world-class expertise with advanced technology to ensure you get the most accurate advice for your treatment.

        </p>
      </div>

      {/* Right Form */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-center text-lg font-semibold text-primary mb-6">
          Book Your Second Opinion Now
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name:"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-full outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone:"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-full outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-full outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message Here"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg outline-none"
            rows="4"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-full font-semibold hover:bg-[#a8006f] transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className="text-center mt-4 text-sm font-medium text-gray-700">
            {status}
          </p>
        )}
      </div>
    </section>
  );
}
