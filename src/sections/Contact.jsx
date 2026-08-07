import { motion } from "framer-motion";
import { ArrowUpRight, Check, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { send } from "@emailjs/browser";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const submit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) { setStatus("setup"); return; }
    setStatus("sending");
    try {
      await send(serviceId, templateId, { from_name: form.get("name"), from_email: form.get("email"), message: form.get("message"), to_name: "Dipak Mundhe" }, { publicKey });
      setStatus("sent"); event.currentTarget.reset();
    } catch { setStatus("error"); }
  };
  const label = status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send inquiry";
  return <section id="contact" className="section contact"><div className="shell contact-grid"><div className="contact-copy"><SectionHeading eyebrow="Start a conversation" title={<>Have an idea that<br/>needs <em>momentum?</em></>}>I&apos;m open to full-stack opportunities, collaborative product work, and conversations where craft is taken seriously.</SectionHeading><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={18}/><span><small>Email</small>{profile.email}</span><ArrowUpRight size={16}/></a><div><MapPin size={18}/><span><small>Location</small>India · available remotely</span></div></div><div className="contact-social"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div></div><motion.form className="contact-form" onSubmit={submit} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="form-top"><div><span className="live-dot"/><small>Available for new work</small></div><p>Tell me a little about what you&apos;re building.</p></div><label>Your name<input required name="name" placeholder="Jane Smith"/></label><label>Email address<input required type="email" name="email" placeholder="jane@company.com"/></label><label>What&apos;s on your mind?<textarea required name="message" rows="4" placeholder="A quick outline is perfect..."/></label><button className="form-submit" type="submit" disabled={status === "sending"}>{status === "sent" ? <Check size={18}/> : <Send size={17}/>} {label}</button>{status === "sent" && <p className="form-success">Thanks — your message is on its way.</p>}{status === "setup" && <p className="form-success">Email delivery needs the three VITE_EMAILJS_* environment variables. You can also email me directly at {profile.email}.</p>}{status === "error" && <p className="form-success">Something went wrong. Please email me directly at {profile.email}.</p>}</motion.form></div></section>;
}
