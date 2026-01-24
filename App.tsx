
import React, { useState, useEffect, useRef } from 'react';
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
  FileText,
  Printer,
  Terminal,
  Loader2,
  Layers,
  Globe,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EDUCATION, EXPERIENCE, PROJECTS } from './constants';
import { Project } from './types';

// --- Improved Page Header ---
const PageHeader = ({ title, subtitle, isDarkMode }: { title: string, subtitle: string, isDarkMode: boolean }) => (
  <div className="mb-20 animate-in fade-in slide-in-from-top-6 duration-1000">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-indigo-500/20">
      <Sparkles size={12} /> Discover
    </div>
    <h1 className={`text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[0.9] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
      {title}
    </h1>
    <p className={`text-xl md:text-2xl max-w-2xl font-medium transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
      {subtitle}
    </p>
  </div>
);

// --- Scroll to Top ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- ENHANCED HOME PAGE ---
const Home = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-7xl mx-auto py-24 animate-in fade-in duration-1000">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 font-bold text-xs uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Available for new opportunities
        </div>
        
        <h1 className={`text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>
          CREATIVE <br /> <span className="gradient-text">DEVELOPER</span>
        </h1>
        
        <p className={`max-w-lg text-xl md:text-2xl leading-relaxed font-medium transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Hello, I'm {PERSONAL_INFO.name}. I bridge the gap between complex engineering and elegant design to build products that scale.
        </p>

        <div className="flex flex-wrap gap-5 pt-6">
          <Link to="/projects" className="group bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center gap-3 shadow-2xl shadow-indigo-600/30 active:scale-95 glow-on-hover">
            Explore Portfolio <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <Link 
            to="/resume" 
            className={`flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all border ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50 shadow-sm'}`}
          >
            Digital CV <FileText size={20} />
          </Link>
        </div>

        <div className="flex items-center gap-12 pt-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Core Tech</p>
            <div className="flex gap-4">
              <Code size={20} className="text-slate-400" />
              <Layers size={20} className="text-slate-400" />
              <Globe size={20} className="text-slate-400" />
            </div>
          </div>
          <div className="h-10 w-px bg-slate-800"></div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">Location</p>
            <p className="text-sm font-bold">{PERSONAL_INFO.location.split(',')[0]}</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-[120px] rounded-full"></div>
        <div className="relative glass p-4 rounded-[4rem] rotate-3 hover:rotate-0 transition-all duration-700 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
            alt="Workspace" 
            className="rounded-[3rem] w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute -bottom-8 -right-8 glass p-8 rounded-3xl animate-bounce shadow-xl">
             <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <CheckCircle size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Status</p>
                 <p className="font-bold text-sm">Building ANPR Systems</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- ENHANCED ABOUT PAGE ---
const About = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-32 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
    <PageHeader 
      title="Background" 
      subtitle="A narrative of my growth, technical interests, and the philosophy behind my work." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid lg:grid-cols-2 gap-24 items-start">
      <div className="space-y-12">
        <div className={`glass p-12 rounded-[3rem] ${isDarkMode ? 'bg-slate-900/50' : 'bg-white shadow-xl'}`}>
          <h3 className="text-3xl font-black mb-8 leading-tight">Driven by Curiosity, <br /> Guided by Design.</h3>
          <div className={`space-y-6 text-lg leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <p>{PERSONAL_INFO.about}</p>
            <p>I believe that every line of code should contribute to a meaningful purpose. My approach combines robust engineering principles with a deep understanding of user behavior to create interfaces that feel natural and intuitive.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Year of Study", value: "3rd Year", sub: "B.E Degree" },
            { label: "Projects", value: "10+", sub: "Completed" },
            { label: "Experience", value: "Internship", sub: "At Infolabz" },
            { label: "Location", value: "India", sub: "Surat, Gujarat" }
          ].map((stat, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] glass ${isDarkMode ? 'bg-slate-800/30' : 'bg-slate-100'}`}>
              <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">{stat.label}</p>
              <h4 className="text-2xl font-black mb-1">{stat.value}</h4>
              <p className="text-xs text-slate-500 font-bold">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-10">
        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 border-b border-slate-800 pb-4">Personal Details</h3>
        <div className="grid gap-6">
          {[ 
            { icon: <Mail size={22}/>, label: PERSONAL_INFO.email, title: "Email Address" },
            { icon: <Phone size={22}/>, label: PERSONAL_INFO.phone, title: "Contact Number" },
            { icon: <MapPin size={22}/>, label: PERSONAL_INFO.location, title: "Currently In" },
            { icon: <Briefcase size={22}/>, label: "Web Developer", title: "Core Role" }
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-6 p-6 rounded-3xl glass ${isDarkMode ? 'hover:bg-indigo-500/5' : 'hover:bg-slate-50 shadow-sm'}`}>
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">{item.title}</span>
                <span className="text-lg font-bold truncate block">{item.label}</span>
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
  <section className="py-32 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
    <PageHeader 
      title="Technology" 
      subtitle="My technical stack is carefully selected to provide the best balance between speed, stability, and scale." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {SKILLS.map((skill, idx) => (
        <div 
          key={idx} 
          className={`glass p-10 rounded-[3rem] group transition-all relative overflow-hidden ${isDarkMode ? 'hover:bg-slate-800/80' : 'hover:bg-white shadow-xl'}`}
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <div className={`mb-8 inline-flex items-center justify-center w-20 h-20 rounded-3xl text-indigo-400 transition-all shadow-inner border border-white/5 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
             {skill.category === 'Frontend' ? <Code size={36} /> : skill.category === 'Backend' ? <Database size={36} /> : <Terminal size={36} />}
          </div>
          <h4 className={`text-2xl font-black mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>{skill.name}</h4>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black">{skill.category}</p>
          
          <div className="mt-8 flex items-center gap-3">
             <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
               <div className="h-full bg-indigo-500 w-full animate-in slide-in-from-left duration-1000"></div>
             </div>
             <span className="text-[10px] font-bold text-indigo-400">100%</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- EXPERIENCE PAGE ---
const Experience = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-1000">
    <PageHeader 
      title="Trajectory" 
      subtitle="The path I've taken through formal education and professional internships." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid lg:grid-cols-2 gap-24">
      <div className="space-y-16">
        <h3 className="text-xl font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-6">
          Professional <div className="h-px flex-1 bg-slate-800"></div>
        </h3>
        <div className="space-y-12">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="group relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800"></div>
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] group-hover:scale-150 transition-transform"></div>
              
              <div className={`glass p-12 rounded-[3rem] transition-all hover:-translate-y-2 ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-white shadow-xl'}`}>
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-3xl font-black mb-1">{exp.role}</h4>
                    <p className="text-indigo-400 font-black text-sm uppercase tracking-widest">{exp.company}</p>
                  </div>
                  <span className="px-5 py-2 rounded-2xl bg-indigo-500/10 text-indigo-400 text-[10px] font-black uppercase tracking-widest border border-indigo-500/20">{exp.period}</span>
                </div>
                <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        <h3 className="text-xl font-black uppercase tracking-[0.4em] text-slate-500 flex items-center gap-6">
          Education <div className="h-px flex-1 bg-slate-800"></div>
        </h3>
        <div className="space-y-12">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="group relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800"></div>
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] group-hover:scale-150 transition-transform"></div>
              
              <div className={`glass p-12 rounded-[3rem] transition-all hover:-translate-y-2 ${isDarkMode ? 'hover:bg-slate-800/50' : 'hover:bg-white shadow-xl'}`}>
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-3xl font-black mb-1">{edu.degree}</h4>
                    <p className="text-purple-400 font-black text-sm uppercase tracking-widest">{edu.institute}</p>
                  </div>
                  <span className="px-5 py-2 rounded-2xl bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest border border-purple-500/20">{edu.period}</span>
                </div>
                <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// --- Animated Project Card Component ---
const ProjectCard: React.FC<{ project: Project, isDarkMode: boolean }> = ({ project, isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`group glass rounded-[4rem] overflow-hidden flex flex-col transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
      } hover:-translate-y-4 ${
        isDarkMode 
          ? 'hover:bg-slate-900/90 border-white/5 hover:border-indigo-500/30' 
          : 'hover:bg-white border-slate-200 shadow-2xl shadow-indigo-500/5'
      }`}
    >
      <div className="h-80 bg-slate-800 overflow-hidden relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div className="absolute top-8 left-8">
           <div className="glass px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
             Featured Project
           </div>
        </div>
      </div>
      
      <div className="p-12 flex-1 flex flex-col">
        <div className="flex gap-3 mb-8 flex-wrap">
          {project.tags.map(tag => (
            <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/10">
              {tag}
            </span>
          ))}
        </div>
        <h4 className={`text-4xl font-black mb-6 transition-colors tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-950'}`}>{project.title}</h4>
        <p className={`text-lg leading-relaxed mb-10 flex-1 transition-colors font-medium ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            to={`/projects/${project.id}`}
            className={`flex-1 w-full text-center px-8 py-4 rounded-2xl transition-all text-xs font-black uppercase tracking-widest border ${isDarkMode ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-slate-100 border-slate-200 text-slate-950 hover:bg-slate-200'}`}
          >
            Details
          </Link>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest active:scale-[0.98]"
            >
              Live Demo <ArrowUpRight size={18} />
            </a>
          )}
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all ${isDarkMode ? 'border-white/10 hover:bg-white/5 text-slate-400' : 'border-slate-200 hover:bg-slate-100 text-slate-600'}`}
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

// --- PROJECTS PAGE ---
const Projects = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-32 px-6 max-w-7xl mx-auto">
    <PageHeader 
      title="Portfolio" 
      subtitle="A collection of specialized solutions, from residential management portals to automated visual recognition systems." 
      isDarkMode={isDarkMode} 
    />
    <div className="grid lg:grid-cols-2 gap-16">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.id} project={project} isDarkMode={isDarkMode} />
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
        <h2 className="text-5xl font-black mb-6">Project Not Found</h2>
        <p className="text-slate-500 mb-10 text-xl font-medium">The digital artifact you are looking for has been moved or archived.</p>
        <button onClick={() => navigate('/projects')} className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3">
          <ChevronLeft size={20} /> Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section className="animate-in fade-in duration-1000">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-24">
          <div className="max-w-7xl mx-auto">
            <button onClick={() => navigate('/projects')} className="text-white/60 hover:text-white flex items-center gap-3 mb-8 font-black uppercase tracking-[0.2em] text-xs transition-colors group">
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Return to Portfolio
            </button>
            <div className="flex flex-wrap gap-4 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-3 gap-24 items-start">
          <div className="lg:col-span-2 space-y-20">
            <div>
              <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-6">
                 Project Context <div className="h-px flex-1 bg-slate-800"></div>
              </h3>
              <p className={`text-2xl leading-relaxed font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.fullDescription}
              </p>
            </div>

            <div className={`p-16 rounded-[4rem] border ${isDarkMode ? 'bg-slate-900/50 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className="text-xl font-black mb-12 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400"><Terminal size={20} /></div>
                Built With
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {project.technologies.map(tech => (
                  <div key={tech} className={`flex items-center gap-4 p-6 rounded-3xl glass ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-white hover:bg-slate-100 shadow-sm'}`}>
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                    <span className="text-sm font-black uppercase tracking-widest">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className={`glass p-12 rounded-[3.5rem] sticky top-32 ${isDarkMode ? 'border-white/10' : 'bg-white shadow-2xl border-slate-200'}`}>
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-12">Project Metadata</h4>
              
              <div className="space-y-6">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl shadow-indigo-600/30 active:scale-[0.98]">
                    Live Deployment <ArrowUpRight size={20} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={`w-full border-2 px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-950'}`}>
                    Repository <Github size={20} />
                  </a>
                )}
              </div>

              <div className="mt-12 pt-12 border-t border-slate-800 space-y-8">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">My Role</p>
                  <p className="font-bold text-lg">Lead Full-Stack Developer</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Timeline</p>
                  <p className="font-bold text-lg">July — Oct 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ENHANCED CONTACT PAGE ---
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
    <section className="py-32 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000">
      <PageHeader 
        title="Connect" 
        subtitle="I'm always interested in hearing about new projects or potential collaborations." 
        isDarkMode={isDarkMode} 
      />
      <div className="grid lg:grid-cols-5 gap-24 items-start">
        <div className="lg:col-span-2 space-y-12">
          <div className={`glass p-16 rounded-[4rem] space-y-12 ${isDarkMode ? 'bg-slate-900/50' : 'bg-white shadow-xl'}`}>
            {[
              { icon: <Mail size={28}/>, title: "Electronic Mail", value: PERSONAL_INFO.email, color: 'text-indigo-400' },
              { icon: <Phone size={28}/>, title: "Mobile Phone", value: PERSONAL_INFO.phone, color: 'text-purple-400' },
              { icon: <MapPin size={28}/>, title: "HQ Location", value: "Surat, India", color: 'text-blue-400' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-8">
                <div className={`w-16 h-16 rounded-3xl flex items-center justify-center shrink-0 border border-white/5 shadow-inner ${isDarkMode ? 'bg-slate-950' : 'bg-slate-50 shadow-sm'} ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1">{item.title}</h4>
                  <p className={`text-lg transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className={`glass p-16 rounded-[4rem] relative overflow-hidden ${isDarkMode ? 'bg-slate-900/50' : 'bg-white shadow-xl'}`}>
            {isSubmitted ? (
              <div className="py-24 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle size={48} />
                </div>
                <h4 className="text-4xl font-black">Message Received</h4>
                <p className="text-slate-500 text-lg">Thank you for reaching out. I generally respond within 24 hours.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 text-indigo-400 font-black uppercase tracking-widest hover:underline text-sm">Send Another Inqury</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Name</label>
                  <input 
                    required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Elon Musk"
                    className={`w-full border-2 rounded-3xl px-8 py-5 focus:outline-none focus:ring-4 transition-all text-lg font-bold ${isDarkMode ? 'bg-slate-950 border-white/5 text-white focus:ring-indigo-500/20 placeholder:text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-indigo-500/20 placeholder:text-slate-400'}`}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Email</label>
                  <input 
                    required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@company.com"
                    className={`w-full border-2 rounded-3xl px-8 py-5 focus:outline-none focus:ring-4 transition-all text-lg font-bold ${isDarkMode ? 'bg-slate-950 border-white/5 text-white focus:ring-indigo-500/20 placeholder:text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-indigo-500/20 placeholder:text-slate-400'}`}
                  />
                </div>
                <div className="sm:col-span-2 space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-2">Message</label>
                  <textarea 
                    required name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Start typing your vision here..."
                    className={`w-full border-2 rounded-[2.5rem] px-8 py-6 focus:outline-none focus:ring-4 transition-all resize-none text-lg font-bold ${isDarkMode ? 'bg-slate-950 border-white/5 text-white focus:ring-indigo-500/20 placeholder:text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-950 focus:ring-indigo-500/20 placeholder:text-slate-400'}`}
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-10 py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-4 shadow-2xl shadow-indigo-600/40 active:scale-[0.98] glow-on-hover">
                    {isSubmitting ? <Loader2 size={24} className="animate-spin" /> : <>Send Inquiry <Send size={20} /></>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ENHANCED RESUME PAGE ---
const Resume = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <section className="py-24 px-6 max-w-6xl mx-auto animate-in fade-in duration-1000">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-16 no-print gap-10">
      <div>
        <h3 className="text-5xl font-black mb-4 tracking-tighter">Curriculum <span className="gradient-text">Vitae</span></h3>
        <p className="text-xs text-slate-500 uppercase tracking-[0.4em] font-black flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500"></div> Latest Version • Oct 2025
        </p>
      </div>
      <button 
        onClick={() => window.print()} 
        className="flex items-center gap-4 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-2xl shadow-white/10 active:scale-95 glow-on-hover"
      >
        <Printer size={20} /> Print Document
      </button>
    </div>

    <div className={`p-20 sm:p-24 rounded-[4rem] shadow-2xl border transition-all relative overflow-hidden resume-container ${isDarkMode ? 'bg-[#0f172a] border-white/5' : 'bg-white border-slate-100 text-slate-900'}`}>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 pb-20 border-b-2 border-slate-800/50 mb-20">
        <div>
          <h2 className="text-8xl font-black tracking-tighter mb-4 leading-none uppercase">{PERSONAL_INFO.name.split(' ')[0]}<br />{PERSONAL_INFO.name.split(' ')[1]}</h2>
          <div className="flex items-center gap-6">
            <p className="text-indigo-500 font-black uppercase tracking-[0.3em] text-xl">{PERSONAL_INFO.role}</p>
            <div className="h-2 w-2 rounded-full bg-slate-700"></div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">GEC Modasa</p>
          </div>
        </div>
        <div className="text-sm space-y-3 text-left md:text-right font-bold uppercase tracking-widest text-slate-500">
          <p className="flex items-center md:justify-end gap-4"><Mail size={18} className="text-indigo-500"/> {PERSONAL_INFO.email}</p>
          <p className="flex items-center md:justify-end gap-4"><Phone size={18} className="text-indigo-500"/> {PERSONAL_INFO.phone}</p>
          <p className="flex items-center md:justify-end gap-4"><MapPin size={18} className="text-indigo-500"/> Surat, Gujarat, India</p>
        </div>
      </div>

      <div className="grid md:grid-cols-12 gap-24">
        <div className="md:col-span-8 space-y-20">
          <div>
            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-10">01. Profile Summary</h4>
            <p className="text-2xl leading-relaxed font-bold tracking-tight italic">"{PERSONAL_INFO.about}"</p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-10">02. Career Timeline</h4>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="mb-12 group last:mb-0">
                <div className="flex justify-between items-baseline mb-4">
                  <h5 className="font-black text-4xl group-hover:text-indigo-400 transition-colors tracking-tight">{exp.role}</h5>
                  <span className="text-xs font-black text-slate-500 uppercase tracking-widest bg-slate-800/50 px-4 py-2 rounded-xl">{exp.period}</span>
                </div>
                <p className="text-indigo-500 text-lg font-black mb-6 uppercase tracking-[0.2em]">{exp.company}</p>
                <p className="text-xl leading-relaxed text-slate-500 font-medium">{exp.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-10">03. Project Index</h4>
            <div className="grid gap-12">
              {PROJECTS.map((proj, idx) => (
                <div key={idx} className="relative pl-10 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                  <h5 className="font-black text-2xl mb-2">{proj.title}</h5>
                  <p className="text-[10px] text-indigo-400 font-black mb-4 uppercase tracking-[0.3em]">{proj.tags.join(' // ')}</p>
                  <p className="text-lg leading-relaxed text-slate-500 font-medium">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-20">
          <div>
            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-10">04. Education</h4>
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="mb-8">
                <h5 className="font-black text-xl mb-2">{edu.degree}</h5>
                <p className="text-indigo-500 text-xs font-black mb-2 uppercase tracking-widest">{edu.institute}</p>
                <p className="text-xs text-slate-500 font-bold">{edu.period}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.5em] mb-10">05. Core Stack</h4>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, idx) => (
                <span key={idx} className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl border transition-all hover:border-indigo-500/50 ${isDarkMode ? 'bg-white/5 text-slate-300 border-white/5' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-20 mt-20 border-t border-slate-800">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white mb-6">
                <Sparkles size={32} />
             </div>
             <p className="text-xs text-slate-500 font-black uppercase tracking-[0.3em] mb-2">Verified Digital Version</p>
             <p className="text-[10px] text-slate-700 font-mono tracking-tighter break-all">AUTHENTIC_RESUME_ID_HET_MANIYA_2025_MODASA_ENGINEER</p>
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
