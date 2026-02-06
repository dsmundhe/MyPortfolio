import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
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
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>
            Have an idea, a project, or just want to say hello? Let us connect
            and build something meaningful together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact Details</h3>
            <div className="contact-detail">
              <Phone />
              <div>
                <strong>Contact Number</strong>
                <p>+91 8080255843</p>
              </div>
            </div>
            <div className="contact-detail">
              <Mail />
              <div>
                <strong>Email</strong>
                <p>dipakmundhe2026@gmail.com</p>
              </div>
            </div>
            <p className="hero-text">
              I am responsive, collaborative, and always open to discussing new
              opportunities or freelance work.
            </p>
          </div>

          <div className="contact-card">
            <h3>Send a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="row">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                rows="5"
                name="message"
                placeholder="Write your message"
                required
              ></textarea>
              <button type="submit" disabled={loading} className="btn btn-primary">
                {loading ? "Sending..." : "Send Message"} <Send size={16} />
              </button>

              {sent && <p className="pill">Email sent successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
