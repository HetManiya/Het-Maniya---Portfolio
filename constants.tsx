
import { Project, Skill, Education, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Het Maniya",
  role: "Web Developer",
  email: "hetmaniya165@gmail.com",
  phone: "+91 9426377389",
  location: "Surat, Gujarat, India",
  address: "302, A-16/P, Saurashtra Residency, Pasodara, Surat - 395013",
  about: "I am a passionate Web Developer currently pursuing my Bachelor of Engineering. I specialize in building responsive and interactive web applications using modern technologies like React JS and JavaScript."
};

export const SKILLS: Skill[] = [
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "React JS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "SQL", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering",
    institute: "Government Engineering College Modasa",
    period: "2022 - 2026",
    description: "Focusing on software engineering principles, web technologies, and database management."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Summer Intern",
    company: "Infolabz, Navrangpura, Ahmedabad",
    period: "July 2, 2025 - July 16, 2025",
    description: "Successfully completed a certificate of summer internship in React framework. Developed an API-based application focusing on real-time data fetching and state management."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "saurashtra-residency",
    title: "Saurashtra Residency Portal",
    description: "A comprehensive digital management system for residents, handling communication and maintenance.",
    fullDescription: "The Saurashtra Residency Portal is a robust full-stack solution designed to streamline residential management. It features a digital notice board for instant community updates, a maintenance tracking system where residents can report issues and monitor resolution progress, and a resource management module for shared facilities. The application prioritizes high performance and accessibility, ensuring that all residents, regardless of tech-savviness, can participate in their community's digital life.",
    tags: ["React", "Tailwind CSS", "Community Portal"],
    technologies: ["React JS", "Context API", "Tailwind CSS", "Lucide Icons", "RESTful APIs", "Firebase"],
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    link: "https://ai.studio/apps/drive/10S_BdnRJmuoP_VaAtVJ1DEGwyn9kmCHA?fullscreenApplet=true",
    github: "https://github.com/hetmaniya/residency-portal"
  },
  {
    id: "anpr-system",
    title: "Automatic Number Plate Detection System",
    description: "An advanced computer vision application for automated identification and logging of vehicle license plates.",
    fullDescription: "The Automatic Number Plate Detection (ANPR) system leverages cutting-edge computer vision algorithms to detect, track, and recognize license plates from live video streams or static images. Utilizing specialized OCR engines and image processing techniques, it can identify characters in varying lighting conditions and angles. This system is designed for high-traffic environments, offering real-time processing and integration capabilities with security databases for automated entry management.",
    tags: ["Computer Vision", "OCR", "Security"],
    technologies: ["Python", "OpenCV", "Tesseract OCR", "React JS", "Node.js", "TensorFlow"],
    imageUrl: "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?auto=format&fit=crop&q=80&w=1200",
    link: "https://ai.studio/apps/drive/1DzPAxPKEhMaEh5ZTYf237avN9D3YoH4m?fullscreenApplet=true",
    github: "https://github.com/hetmaniya/anpr-detection"
  }
];
