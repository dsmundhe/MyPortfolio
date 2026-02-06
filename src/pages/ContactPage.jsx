import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Have an idea, a project, or just want to say hello? Let us connect
            and build something meaningful together.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Contact Details
            </h3>
            <div className="mt-6 flex items-start gap-3 text-slate-600 dark:text-slate-300">
              <Phone className="mt-1 text-sky-500 dark:text-sky-300" />
              <div>
                <strong className="text-slate-900 dark:text-white">
                  Contact Number
                </strong>
                <p className="mt-1 text-sm">+91 8080255843</p>
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3 text-slate-600 dark:text-slate-300">
              <Mail className="mt-1 text-sky-500 dark:text-sky-300" />
              <div>
                <strong className="text-slate-900 dark:text-white">Email</strong>
                <p className="mt-1 text-sm">dipakmundhe2026@gmail.com</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
              I am responsive, collaborative, and always open to discussing new
              opportunities or freelance work.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
                href="https://github.com/dsmundhe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
                href="https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:-translate-y-1 hover:border-sky-400 hover:text-sky-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-sky-300"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Send a Message
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700 focus:border-sky-400 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700 focus:border-sky-400 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700 focus:border-sky-400 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message"
                required
                className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700 focus:border-sky-400 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"} <Send size={16} />
              </button>

              {sent && (
                <p className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-500 dark:text-sky-300">
                  Email sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
