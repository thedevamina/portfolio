import taskshot from "@/assets/project-task.jpg";
import universityShot from "@/assets/project-uni.jpg";
import aimlshot from "@/assets/project-university.jpg";
import cafeShot from "@/assets/project-cafe.jpg";
import spendwiseShot from "@/assets/project-spendwise.jpg";

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;

export const SOCIALS = {
  github: "https://github.com/thedevamina",
  linkedin: "https://www.linkedin.com/in/thedevamina",
  email: "mailto:thedevamina@gmail.com",
};

export const ROLES = [
  "Full-Stack Developer",
  "Web & Mobile Applications",
  "AI/ML Products",
];

export const STATS = [
  { value: 24, suffix: "+", label: "Projects completed" },
  { value: 18, suffix: "", label: "Technologies used" },
  { value: 2, suffix: "yrs", label: "Learning journey" },
  { value: 100, suffix: "%", label: "Craft, every ship" },
];

export const TIMELINE = [
  {
    year: "2023",
    title: "C++ • Python",
    body: "Started building foundational knowledge in programming logic and algorithms.",
  },
  {
    year: "2024",
    title: "HTML • CSS • JavaScript",
    body: "Focused on web fundamentals, building responsive layouts and interactive interfaces.",
  },
  {
    year: "2025",
    title: "MERN Stack",
    body: "Advanced to full-stack development, building end-to-end applications with MongoDB, Express, React, and Node.js.",
  },
  {
    year: "2026",
    title: "Laravel • PHP • AI/ML",
    body: "Expanding into robust backend systems with Laravel and integrating AI/ML workflows.",
  },
];

export const SKILL_GROUPS = [
  { title: "Frontend", accent: "primary", items: ["HTML", "CSS", "JavaScript", "React", "React Native", "Next.js", "TypeScript"] },
  { title: "Backend", accent: "violet", items: ["PHP", "Laravel", "Node.js", "Express"] },
  { title: "Database", accent: "cyan", items: ["MySQL", "MongoDB"] },
  {
    title: "Tools & Craft",
    accent: "primary",
    items: ["Git", "GitHub", "Figma", "Photoshop", "Railway", "AWS", "Render", "Postman", "Responsive Design"],
  },
] as const;

export const PROJECTS = [
  {
    title: "Aurum Luxury Store",
    year: "2026",
    description: "TypeScript-based e-commerce storefront, including product catalog, cart, and purchase flow UI.",
    stack: ["TypeScript", "React","Laravel","MySQL"],
    image: cafeShot, 
    github: "https://github.com/thedevamina/aurum-luxury-store",
  },
  {
    title: "AI-ML-Projects",
    year: "2026",
    description: "ML-powered web applications using Flask, React, and scikit-learn, covering model integration and end-to-end app delivery.",
    stack: ["Flask", "React", "scikit-learn"],
    image: aimlshot, 
    github: "https://github.com/thedevamina/AI-ML-Projects",
  },
  {
    title: "University Management System",
    year: "2026",
    description: "Built a PHP-based system for managing university records and administrative workflows.",
    stack: ["PHP","Blade","Laravel","MySQL"],
    image: universityShot,
    github: "https://github.com/thedevamina/university-management-system",
  },
  {
    title: "SpendWise",
    year: "2026",
    description: "Mobile Expense Tracking App built with React Native, TypeScript, and Expo, featuring API integration and category-based analytics.",
    stack: ["React Native", "TypeScript", "Expo"],
    image: spendwiseShot,
    github: "https://github.com/thedevamina/SpendWise",
  },
  {
    title: "01-Task-Manager",
    year: "2026",
    description: "JavaScript-based task management application covering task creation, tracking, and status updates.",
    stack: ["JavaScript","Docker","Node.js","Express","CI/CD"],
    image: taskshot,
    github: "https://github.com/thedevamina/01-task-manager",
  },
];

export const EXPERIENCE = [
  {
    role: "Software Development Intern",
    org: "Techno Fortress",
    period: "July 2026 — Present",
    points: [
      "Contributing to live software development projects in a professional on-site team environment.",
      "Collaborating with a development team on task delivery, code quality, and iterative feature improvements.",
    ],
  },
  {
    role: "Independent Developer",
    org: "Self Employed",
    period: "2024 — Present",
    points: [
      "Designed and built multiple end-to-end web, mobile, and AI/ML products independently.",
      "Managed the full lifecycle from problem definition to deployment.",
    ],
  },
];

export const SERVICES = [
  { title: "Web Development", body: "End-to-end web applications with modern frontend frameworks, APIs and maintainable architecture." },
  { title: "AI/ML Applications", body: "Practical AI/ML applications with model integration, APIs and usable product interfaces." },
  { title: "AI-Powered Web Apps", body: "Intelligent web products that integrate AI capabilities into real user workflows." },
  { title: "Browser Automation", body: "Automated browser workflows for repetitive tasks, testing and web-based processes." },
  { title: "Frontend Development", body: "Responsive React and TypeScript interfaces focused on performance, accessibility and clean user flows." },
  { title: "Backend & API Development", body: "Database-backed applications, REST APIs and backend services built for reliable product workflows." },
];

export const COURSEWORK = [
  "Data Structures & Algorithms",
  "Database Systems",
  "Web Development",
  "Mobile app Development",
  "Machine learning",
  "Artificial Intelligence",
  "Computer Networks",
  "DLD",
  "Operating Systems",
  "Human–Computer Interaction",
  "Software Engineering",
  "Object Oriented Programming",
];