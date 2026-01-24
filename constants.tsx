
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
    id: "weather-sphere",
    title: "WeatherSphere Pro",
    description: "Real-time weather analytics application with 7-day forecasting and dynamic visualization.",
    fullDescription: "WeatherSphere Pro provides highly accurate, real-time weather data by integrating with enterprise-grade meteorological APIs. The application features dynamic background themes that change based on current local conditions, detailed hourly breakdowns, and a 7-day extended forecast. Built with a mobile-first approach, it offers a seamless experience across all devices with smooth transitions and interactive charts for temperature trends.",
    tags: ["JavaScript", "API Integration", "Data Visualization"],
    technologies: ["JavaScript (ES6)", "OpenWeatherMap API", "Chart.js", "CSS Grid & Flexbox", "Geolocation API"],
    imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1200",
    link: "#",
    github: "https://github.com/hetmaniya/weather-sphere"
  }
];
