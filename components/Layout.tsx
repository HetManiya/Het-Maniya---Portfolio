
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';
import { Sun, Moon, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleTheme }) => {
  const activeClass = ({ isActive }: { isActive: boolean }) => 
    `transition-all duration-300 relative px-1 py-1 ${isActive 
      ? (isDarkMode ? 'text-white font-bold' : 'text-indigo-600 font-bold') 
      : (isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-indigo-600')}`;

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#020617] text-slate-200 theme-dark' : 'bg-slate-50 text-slate-900 theme-light'}`}>
      {/* Background blobs for visual depth */}
      <div className="blob top-[-100px] left-[-100px] opacity-40"></div>
      <div className="blob bottom-[-100px] right-[-100px] opacity-30" style={{ animationDelay: '-5s', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)' }}></div>

      <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-500 no-print ${isDarkMode ? 'bg-[#020617]/70 border-white/5' : 'bg-white/70 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:rotate-12 transition-transform">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-extrabold tracking-tight">HET<span className="gradient-text">.M</span></span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest transition-colors">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact', 'Resume'].map((item) => (
              <NavLink key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className={activeClass}>
                {({ isActive }) => (
                  <>
                    {item}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transition-transform origin-left duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-indigo-600 hover:bg-slate-200'}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`hidden sm:flex px-6 py-2.5 rounded-xl text-sm font-bold transition-all border shadow-lg active:scale-95 ${isDarkMode ? 'bg-white text-slate-950 border-transparent hover:bg-slate-200 shadow-white/5' : 'bg-indigo-600 text-white hover:bg-indigo-700 border-transparent shadow-indigo-600/20'}`}
            >
              Work with me
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-20 min-h-[calc(100vh-80px)]">{children}</main>

      <footer className={`py-16 border-t transition-all duration-500 no-print ${isDarkMode ? 'border-white/5 bg-[#020617] text-slate-500' : 'border-slate-200 bg-white text-slate-500'}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-300 mb-2">Het Maniya</h3>
            <p className="text-sm max-w-xs">Crafting digital experiences that matter. Pushing the boundaries of web development one pixel at a time.</p>
          </div>
          <div className="md:text-right text-xs uppercase tracking-widest font-bold">
            <div className="flex md:justify-end gap-6 mb-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">GitHub</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a>
            </div>
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
