import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser"; // ✅ Correct import
import { Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_f88m34e";
    const templateID = "template_xcd86ec";
    const publicKey = "Y9b70cailiAE8vdtn";

    sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log("Email sent:", result.text);
        setSent(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-[#0f0f0f] py-12 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">
        Get in Touch with Me!
      </h2>

      <div className="bg-[#1a1a1a] rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Phone className="text-green-400 mt-1" />
            <div>
              <p className="font-semibold text-white">Contact Number:</p>
              <p className="text-gray-300">+91 8080255843</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-green-400 mt-1" />
            <div>
              <p className="font-semibold text-white">Email me:</p>
              <p className="text-gray-300">dipakmundhe2026@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-[#111] text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-700 rounded-md bg-[#111] text-white placeholder-gray-400"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-[#111] text-white placeholder-gray-400"
            />
            <textarea
              rows="5"
              name="message"
              placeholder="Write your message"
              required
              className="w-full px-4 py-3 border border-gray-700 rounded-md bg-[#111] text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Me Message"} <Send size={16} />
            </button>

            {sent && (
              <p className="text-green-400 font-medium pt-2">
                ✅ Email sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
