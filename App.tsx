
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Assistant from './components/Assistant';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Github, 
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Database,
  Send, 
  CheckCircle,
  AlertCircle,
  FileText,
  Printer,
  Terminal,
  Loader2,
  Box,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EDUCATION, EXPERIENCE, PROJECTS } from './constants';

// --- Page Header Component ---
const PageHeader = ({ title, subtitle, isDarkMode }: { title: string, subtitle: string, isDarkMode: boolean }) => (
  <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
    <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h1>
    <p className={`text-lg transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
      {subtitle}
    </p>
    <div className="w-20 h-1.5 bg-indigo-600 mt-6 rounded-full"></div>
  </div>
);

// --- Scroll to Top on Navigation ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- HOME PAGE ---
const Home = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="min-h-[85vh] flex flex-col justify-center px-6 max-w-6xl mx-auto py-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
    <div className="space-y-6 max-w-4xl">
      <span className="text-indigo-400 font-mono tracking-[0.3em] text-sm uppercase block">Introduction</span>
      <h1 className={`text-6xl md:text-8xl font-black tracking-tight leading-none transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        {PERSONAL_INFO.name.split(' ')[0]} <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[1]}</span>
      </h1>
      <h2 className={`text-2xl md:text-4xl font-semibold transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        {PERSONAL_INFO.role} & <span className="text-indigo-500">Full-Stack Explorer</span>
      </h2>
      <p className={`max-w-xl text-xl leading-relaxed mt-6 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        Crafting modern web experiences with a focus on performance and simplicity. Currently studying at {EDUCATION[0].institute}.
      </p>
      <div className="flex flex-wrap gap-4 mt-12">
        <Link to="/projects" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-xl shadow-indigo-600/20 active:scale-95">
          View Projects <ChevronRight size={18} />
        </Link>
        <Link 
          to="/resume" 
          className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all border ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50 shadow-sm'}`}
        >
          <FileText size={18} /> Digital Resume
        </Link>
      </div>
    </div>
  </section>
);

// --- ABOUT PAGE ---
const About = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
    <PageHeader 
      title="About Me" 
      subtitle="A deep dive into my background, passions, and goals." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <div className="relative group">
        <div className={`absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-3xl`}></div>
        <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden glass ${isDarkMode ? 'border-white/10' : 'border-slate-200'}`}>
           <img src="https://picsum.photos/seed/het-about/800/1000" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </div>
      <div className="space-y-8">
        <div className={`glass p-8 rounded-3xl space-y-4 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-xl'}`}>
          <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Personal Philosophy</h3>
          <p className={`leading-relaxed text-lg transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {PERSONAL_INFO.about}
          </p>
          <p className={`leading-relaxed transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I focus on the intersection of design and engineering—building things that not only work perfectly but also provide a delightful experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[ 
            { icon: <Mail size={20}/>, label: PERSONAL_INFO.email, title: "Email" },
            { icon: <Phone size={20}/>, label: PERSONAL_INFO.phone, title: "Phone" },
            { icon: <MapPin size={20}/>, label: PERSONAL_INFO.location, title: "Based In" },
            { icon: <GraduationCap size={20}/>, label: "B.E Degree", title: "Education" }
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl glass ${isDarkMode ? 'bg-slate-800/30' : 'bg-slate-50'}`}>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-0.5">{item.title}</span>
                <span className="text-sm font-semibold truncate block">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- SKILLS PAGE ---
const Skills = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
    <PageHeader 
      title="Skillset" 
      subtitle="The specialized tools and technologies I use to bring ideas to life." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {SKILLS.map((skill, idx) => (
        <div 
          key={idx} 
          className={`glass p-8 rounded-[2rem] group transition-all hover:-translate-y-2 ${isDarkMode ? 'hover:bg-slate-800/50 border-white/5' : 'hover:bg-white shadow-xl border-slate-200'}`}
        >
          <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl text-indigo-400 group-hover:rotate-12 transition-all ${isDarkMode ? 'bg-slate-900 shadow-inner' : 'bg-slate-50 shadow-sm'}`}>
             {skill.category === 'Frontend' ? <Code size={32} /> : skill.category === 'Backend' ? <Database size={32} /> : <Terminal size={32} />}
          </div>
          <h4 className={`text-xl font-bold mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{skill.name}</h4>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black">{skill.category}</span>
            <div className="h-px flex-1 bg-slate-800"></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- EXPERIENCE PAGE ---
const Experience = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
    <PageHeader 
      title="My Journey" 
      subtitle="A timeline of my professional experience and academic background." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="space-y-10">
        <h3 className={`text-2xl font-bold flex items-center gap-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400"><Briefcase size={20} /></div>
          Work Experience
        </h3>
        <div className="space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="group relative pl-8 border-l-2 border-slate-700/50 pb-8 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
              <div className={`glass p-8 rounded-3xl transition-all ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-white shadow-xl'}`}>
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{exp.role}</h4>
                    <p className="text-indigo-400 font-bold">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold">{exp.period}</span>
                </div>
                <p className={`leading-relaxed text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <h3 className={`text-2xl font-bold flex items-center gap-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400"><GraduationCap size={20} /></div>
          Education
        </h3>
        <div className="space-y-8">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="group relative pl-8 border-l-2 border-slate-700/50 pb-8 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
              <div className={`glass p-8 rounded-3xl transition-all ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-white shadow-xl'}`}>
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{edu.degree}</h4>
                    <p className="text-purple-400 font-bold">{edu.institute}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold">{edu.period}</span>
                </div>
                <p className={`leading-relaxed text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- PROJECTS PAGE ---
const Projects = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
    <PageHeader 
      title="Portfolio" 
      subtitle="A showcase of digital products I've built with precision." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid md:grid-cols-2 gap-10">
      {PROJECTS.map((project, idx) => (
        <div key={idx} className={`group glass rounded-[2.5rem] overflow-hidden transition-all flex flex-col ${isDarkMode ? 'border-white/5 hover:border-indigo-500/30' : 'border-slate-200 hover:border-indigo-300'}`}>
          <div className="h-64 bg-slate-800 overflow-hidden relative">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
          <div className="p-10 flex-1 flex flex-col">
            <div className="flex gap-2 mb-6 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {tag}
                </span>
              ))}
            </div>
            <h4 className={`text-3xl font-bold mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h4>
            <p className={`text-base leading-relaxed mb-8 flex-1 transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {project.description}
            </p>
            <div className="flex items-center gap-4">
              <Link 
                to={`/projects/${project.id}`}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-sm font-bold shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                View Case Study <ChevronRight size={18} />
              </Link>
              <button className={`p-3 rounded-xl border transition-colors ${isDarkMode ? 'border-white/10 hover:bg-white/5 text-slate-400' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}>
                <Github size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- PROJECT DETAILS PAGE ---
const ProjectDetails = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-black mb-4">Project Not Found</h2>
        <p className="text-slate-500 mb-8">The project you are looking for doesn't exist or has been moved.</p>
        <button onClick={() => navigate('/projects')} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2">
          <ChevronLeft size={18} /> Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-6xl mx-auto">
            <button onClick={() => navigate('/projects')} className="text-white/60 hover:text-white flex items-center gap-2 mb-6 font-bold uppercase tracking-widest text-xs transition-colors">
              <ChevronLeft size={16} /> Back to Portfolio
            </button>
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <FileText className="text-indigo-500" /> Project Overview
              </h3>
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {project.fullDescription}
              </p>
            </div>

            <div className={`p-8 rounded-3xl border ${isDarkMode ? 'bg-slate-900 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className={`text-xl font-bold mb-8 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                <Layers className="text-indigo-500" /> Technology Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.technologies.map(tech => (
                  <div key={tech} className={`flex items-center gap-3 p-4 rounded-xl glass ${isDarkMode ? 'bg-white/5' : 'bg-white'}`}>
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-sm font-bold uppercase tracking-wide">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className={`glass p-8 rounded-3xl sticky top-24 ${isDarkMode ? 'border-white/10' : 'bg-white shadow-xl border-slate-200'}`}>
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-8">Take Action</h4>
              <div className="space-y-4">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-indigo-600/20 active:scale-[0.98]">
                    Live Deployment <ExternalLink size={20} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={`w-full border-2 px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3 ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-900'}`}>
                    Source Code <Github size={20} />
                  </a>
                )}
              </div>
              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Role</p>
                <p className="font-bold text-sm">Lead Developer</p>
              </div>
              <div className="mt-4">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Completed</p>
                <p className="font-bold text-sm">October 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CONTACT PAGE ---
const Contact = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: any) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
      <PageHeader 
        title="Get In Touch" 
        subtitle="Let's build something extraordinary together." 
        isDarkMode={isDarkMode} 
      />
      <div className="grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2 space-y-8">
          <div className={`glass p-10 rounded-3xl space-y-8 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-xl'}`}>
            {[
              { icon: <Mail size={24}/>, title: "Email Address", value: PERSONAL_INFO.email, color: 'text-indigo-400' },
              { icon: <Phone size={24}/>, title: "Phone Number", value: PERSONAL_INFO.phone, color: 'text-purple-400' },
              { icon: <MapPin size={24}/>, title: "Office Location", value: PERSONAL_INFO.address, color: 'text-blue-400' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-slate-900 shadow-inner' : 'bg-slate-50 shadow-sm'} ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className={`glass p-10 rounded-3xl relative overflow-hidden ${isDarkMode ? 'bg-slate-800/50' : 'bg-white shadow-xl'}`}>
            {isSubmitted ? (
              <div className="py-20 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <CheckCircle size={64} className="text-green-500 mb-2" />
                <h4 className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Inquiry Sent!</h4>
                <p className="text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 text-indigo-400 font-black uppercase tracking-widest hover:underline text-sm">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                    <input 
                      required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe"
                      className={`w-full border-2 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 transition-all ${isDarkMode ? 'bg-slate-900 border-white/5 text-white focus:ring-indigo-500/20' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-indigo-500/20'}`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input 
                      required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com"
                      className={`w-full border-2 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 transition-all ${isDarkMode ? 'bg-slate-900 border-white/5 text-white focus:ring-indigo-500/20' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-indigo-500/20'}`}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Subject</label>
                  <input 
                    required type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Discussion"
                    className={`w-full border-2 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 transition-all ${isDarkMode ? 'bg-slate-900 border-white/5 text-white focus:ring-indigo-500/20' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-indigo-500/20'}`}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <textarea 
                    required name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me about your vision..."
                    className={`w-full border-2 rounded-2xl px-5 py-4 focus:outline-none focus:ring-4 transition-all resize-none ${isDarkMode ? 'bg-slate-900 border-white/5 text-white focus:ring-indigo-500/20' : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-indigo-500/20'}`}
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-indigo-600/30 active:scale-[0.98]">
                  {isSubmitting ? <Loader2 size={24} className="animate-spin" /> : <>Send Message <Send size={20} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- RESUME PAGE (Uploaded Resume Data Display) ---
const Resume = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-12 px-6 max-w-5xl mx-auto animate-in fade-in duration-700">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-10 no-print gap-6">
      <div>
        <h3 className={`text-3xl font-black transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Official CV</h3>
        <p className="text-sm text-slate-500 mt-1 uppercase tracking-widest font-bold">Het Maniya | Last Updated Oct 2025</p>
      </div>
      <button 
        onClick={() => window.print()} 
        className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
      >
        <Printer size={20} /> Export to PDF
      </button>
    </div>

    {/* Paper Layout */}
    <div className={`p-12 sm:p-20 rounded-[3rem] shadow-2xl border transition-colors relative overflow-hidden resume-container ${isDarkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200 text-slate-900'}`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>
      
      <div className="border-b-2 pb-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-8 border-indigo-500/20">
        <div>
          <h2 className="text-6xl font-black uppercase tracking-tighter mb-2">{PERSONAL_INFO.name}</h2>
          <div className="flex items-center gap-4">
            <p className="text-indigo-600 font-black uppercase tracking-widest text-lg">{PERSONAL_INFO.role}</p>
            <div className="h-1.5 w-1.5 rounded-full bg-slate-500"></div>
            <p className="text-slate-500 font-bold">{EDUCATION[0].institute.split(' ').pop()}</p>
          </div>
        </div>
        <div className="text-sm space-y-2 text-left md:text-right font-medium">
          <p className="flex items-center md:justify-end gap-3"><Mail size={16} className="text-indigo-500"/> {PERSONAL_INFO.email}</p>
          <p className="flex items-center md:justify-end gap-3"><Phone size={16} className="text-indigo-500"/> {PERSONAL_INFO.phone}</p>
          <p className="flex items-center md:justify-end gap-3"><MapPin size={16} className="text-indigo-500"/> {PERSONAL_INFO.location}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-12">
          <div>
            <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">Profile Objective</h4>
            <p className="text-lg leading-relaxed font-medium">{PERSONAL_INFO.about}</p>
          </div>

          <div>
            <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">Experience History</h4>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <h5 className="font-black text-xl">{exp.role}</h5>
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{exp.period}</span>
                </div>
                <p className="text-indigo-600 text-sm font-black mb-4 uppercase tracking-wider">{exp.company}</p>
                <p className="text-base leading-relaxed text-slate-500">{exp.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">Project Spotlights</h4>
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <h5 className="font-black text-xl mb-1">{proj.title}</h5>
                <p className="text-xs text-indigo-500 font-bold mb-3 uppercase tracking-widest">{proj.tags.join(' • ')}</p>
                <p className="text-base leading-relaxed text-slate-500">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">Academic Background</h4>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <h5 className="font-black text-sm">{edu.degree}</h5>
                <p className="text-indigo-600 text-[10px] font-bold mb-1">{edu.institute}</p>
                <p className="text-[10px] text-slate-500 mb-2">{edu.period}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-6">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, idx) => (
                <span key={idx} className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg border ${isDarkMode ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-10 border-t border-slate-700/50">
            <h4 className="text-xs font-black text-slate-600 uppercase tracking-[0.3em] mb-4">Official Address</h4>
            <p className="text-[10px] text-slate-500 leading-relaxed font-bold uppercase tracking-widest">
              {PERSONAL_INFO.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.className = isDarkMode ? 'theme-dark' : 'theme-light';
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <Layout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
        <Route path="/skills" element={<Skills isDarkMode={isDarkMode} />} />
        <Route path="/experience" element={<Experience isDarkMode={isDarkMode} />} />
        <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
        <Route path="/projects/:id" element={<ProjectDetails isDarkMode={isDarkMode} />} />
        <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
        <Route path="/resume" element={<Resume isDarkMode={isDarkMode} />} />
      </Routes>
      <div className="no-print">
        <Assistant />
      </div>
    </Layout>
  );
};

export default App;
