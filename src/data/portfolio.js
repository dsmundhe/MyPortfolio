import {
  BarChart3, Bot, Braces, Code2, Database, Globe2, Layers3,
  LayoutDashboard, ShieldCheck, Sparkles, TerminalSquare, WandSparkles,
} from "lucide-react";

export const profile = {
  name: "Dipak Mundhe",
  role: "MERN Stack Developer",
  location: "India",
  email: "dipakmundhe2026@gmail.com",
  github: "https://github.com/dsmundhe",
  linkedin: "https://www.linkedin.com/in/dipak-samadhan-mundhe-b2301425b/",
  resume: "/resume.png",
};

export const navigation = [
  ["Home", "home"], ["About", "about"], ["Capabilities", "skills"],
  ["Selected work", "projects"], ["Experience", "experience"], ["Contact", "contact"],
];

export const skillGroups = [
  { label: "Frontend systems", icon: Layers3, skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Responsive Design", "Figma"] },
  { label: "Backend & data", icon: Database, skills: ["Node.js", "Express", "MongoDB", "SQL", "REST API", "JWT Authentication"] },
  { label: "Java & engineering", icon: Braces, skills: ["Java", "Spring Boot", "OOP", "DSA", "Database Design", "Git & GitHub"] },
  { label: "Cloud & analytics", icon: BarChart3, skills: ["SAP Analytics Cloud", "Business Intelligence", "AWS Basics", "Linux", "Vercel", "Postman"] },
];

export const projects = [
  { title: "HostelDekho", category: "MERN platform", image: "/image1.jpg", demo: "https://hostel-dekho-frontend.vercel.app/", repo: "https://github.com/dsmundhe/Hostel-Dekho.git", number: "01", problem: "Finding the right student accommodation is often fragmented and time-consuming.", solution: "A focused discovery experience that brings listings, filtering, and booking-ready information into one flow.", stack: ["React", "Node", "Express", "MongoDB"], accent: "cyan" },
  { title: "JavaWithDipak", category: "Learning platform", image: "/image2.jpg", demo: "https://java-with-dipak-frontend.vercel.app/", repo: "https://github.com/dsmundhe", number: "02", problem: "Java learners need approachable material that makes fundamentals feel structured.", solution: "An educational product designed around clear explanations and a focused learning path.", stack: ["React", "Java", "Tailwind"], accent: "violet" },
  { title: "PlanIT", category: "Productivity", image: "/image3.jpg", demo: "https://planit-taskmanager.netlify.app/", repo: "https://github.com/dsmundhe/TaskManager.git", number: "03", problem: "Personal tasks lose momentum when planning feels heavy.", solution: "A calm, visual workspace for organising priorities and moving work forward.", stack: ["React", "JavaScript", "Tailwind"], accent: "blue" },
  { title: "Guidance Guru", category: "EdTech", image: "/image4.jpg", demo: "#", repo: "https://github.com/dsmundhe", number: "04", problem: "Students need clearer pathways when making academic decisions.", solution: "A guided learning concept that turns complex choices into approachable next steps.", stack: ["React", "UX", "Responsive UI"], accent: "cyan" },
  { title: "Gemini AI Chat", category: "AI interface", image: "/image5.jpg", demo: "https://chatai-dm.netlify.app/", repo: "https://github.com/dsmundhe", number: "05", problem: "AI chat tools can feel technical and distracting for everyday use.", solution: "A minimal conversation interface that keeps prompts, responses, and flow in focus.", stack: ["React", "AI", "Vite"], accent: "violet" },
  { title: "ShopX", category: "Commerce", image: "/image6.jpg", demo: "https://shopx-frontend.vercel.app/", repo: "https://github.com/dsmundhe/ShopX-eCommerce-website.git", number: "06", problem: "Online shopping needs a fast, reassuring path from discovery to cart.", solution: "A storefront with product discovery, cart interactions, and responsive shopping journeys.", stack: ["React", "JavaScript", "Tailwind"], accent: "blue" },
];

export const timeline = [
  { period: "Now", title: "SAP Analytics Cloud Intern", company: "Cognizant", text: "Supporting dashboard development, reporting, and business intelligence work with an emphasis on clear data storytelling.", icon: LayoutDashboard },
  { period: "2024 — Now", title: "MERN Stack Developer", company: "Independent projects", text: "Building full-stack web products, evolving frontend systems, and turning product concepts into responsive experiences.", icon: Code2 },
  { period: "Continuous", title: "Hackathons & learning", company: "Hands-on practice", text: "Exploring AI, Java engineering, and product problem-solving through focused builds and technical challenges.", icon: Sparkles },
];

export const services = [
  [Globe2, "Web development", "Responsive web experiences that feel considered on every screen."],
  [Code2, "Full-stack delivery", "Thoughtful frontend and API work connected as one dependable product."],
  [ShieldCheck, "API engineering", "Clear, maintainable REST APIs with authentication-aware foundations."],
  [LayoutDashboard, "Dashboard development", "Business reporting interfaces that make data easier to understand."],
  [WandSparkles, "UI engineering", "Polished component systems, interaction detail, and accessible interfaces."],
  [TerminalSquare, "Performance focus", "Pragmatic improvements to responsiveness, loading, and user flow."],
];

export const certificates = [
  "SAP Analytics Cloud — practical dashboard & reporting experience",
  "Java & Object-Oriented Programming — continuous practice",
  "MERN Stack Development — independent product builds",
];

export const commandItems = [
  { label: "View selected work", target: "projects", shortcut: "P" },
  { label: "Explore capabilities", target: "skills", shortcut: "S" },
  { label: "Read my experience", target: "experience", shortcut: "E" },
  { label: "Start a conversation", target: "contact", shortcut: "C" },
];
