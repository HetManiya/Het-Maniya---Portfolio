
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import { Sun, Moon } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleTheme }) => {
  const activeClass = ({ isActive }: { isActive: boolean }) => 
    `transition-colors relative pb-1 ${isActive 
      ? (isDarkMode ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500' : 'text-indigo-600 font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-indigo-500') 
      : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-indigo-600')}`;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0f172a] text-slate-200 theme-dark' : 'bg-slate-50 text-slate-900 theme-light'}`}>
      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b transition-colors duration-300 no-print ${isDarkMode ? 'bg-[#0f172a]/80 border-white/5' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold gradient-text">HET.M</Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium transition-colors">
            <NavLink to="/" className={activeClass}>Home</NavLink>
            <NavLink to="/about" className={activeClass}>About</NavLink>
            <NavLink to="/skills" className={activeClass}>Skills</NavLink>
            <NavLink to="/experience" className={activeClass}>Experience</NavLink>
            <NavLink to="/projects" className={activeClass}>Projects</NavLink>
            <NavLink to="/contact" className={activeClass}>Contact</NavLink>
            <NavLink to="/resume" className={activeClass}>Resume</NavLink>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-200 text-indigo-600 hover:bg-slate-300'}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${isDarkMode ? 'bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 border-indigo-500/20' : 'bg-indigo-600 text-white hover:bg-indigo-700 border-transparent shadow-lg shadow-indigo-600/20'}`}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
      <main className="pt-16 min-h-[calc(100vh-64px)]">{children}</main>
      <footer className={`py-12 border-t transition-colors duration-300 no-print ${isDarkMode ? 'border-white/5 bg-[#0b1222] text-slate-500' : 'border-slate-200 bg-slate-100 text-slate-500'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
