import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center font-bold">L</div>
              <span className="text-xl font-bold">LFX</span>
            </div>
            <p className="text-slate-400 text-sm">
              แพลตฟอร์มเดียวที่สร้างขึ้นโดยเฉพาะสำหรับโครงการโอเพ่นซอร์ส เพื่อการเติบโตที่ยั่งยืน
            </p>
          </div>
          
          {[
            { head: 'ผลิตภัณฑ์', links: ['Security', 'Insights', 'Mentorship', 'Crowdfunding'] },
            { head: 'แหล่งข้อมูล', links: ['Documentation', 'API Reference', 'Blog', 'Case Studies'] },
            { head: 'องค์กร', links: ['About', 'Careers', 'Contact', 'Privacy Policy'] }
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6 text-slate-200">{col.head}</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                {col.links.map(link => (
                  <li key={link}><a href="#" className="hover:text-indigo-400 transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2024 LFX Platform. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;