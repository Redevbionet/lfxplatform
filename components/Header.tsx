import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            L
          </div>
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
            LFX
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['ผลิตภัณฑ์', 'โซลูชัน', 'ข้อมูลเชิงลึก', 'เกี่ยวกับเรา'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-sm font-medium hover:text-indigo-400 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {item}
            </a>
          ))}
          <button className="flex items-center space-x-1 text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <Globe size={16} />
            <span>TH</span>
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-indigo-500/30">
            เริ่มต้นใช้งาน
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col space-y-4 animate-fade-in-down">
           {['ผลิตภัณฑ์', 'โซลูชัน', 'ข้อมูลเชิงลึก', 'เกี่ยวกับเรา'].map((item) => (
            <a key={item} href="#" className="text-slate-700 font-medium text-lg">{item}</a>
          ))}
          <button className="bg-indigo-600 text-white w-full py-3 rounded-lg font-bold">
            เริ่มต้นใช้งาน
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;