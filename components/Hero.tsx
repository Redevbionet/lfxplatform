import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>สูตรแห่งความสำเร็จสำหรับ Open Source</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              LFX = <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                ทำงานมากขึ้น
              </span><br />
              ทำงานน้อยลง
            </h1>

            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              สัมผัสกับประสบการณ์ด้านผลผลิตที่เพิ่มขึ้นจากโซลูชันแบบบูรณาการสำหรับการวางแผนและการดำเนินการร่วมกันข้ามขอบเขตขององค์กรในโครงการโอเพ่นซอร์สของคุณ
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <span>เริ่มต้นใช้งานฟรี</span>
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 rounded-lg font-bold text-white border border-slate-700 hover:bg-slate-800 transition-all">
                ดูวิดีโอแนะนำ
              </button>
            </div>
            
            <p className="text-sm text-slate-400 font-light pt-2">
              คุณทำหน้าที่นำ เขียนโค้ด และเติบโต <strong className="text-white">LFX ช่วยจัดการ</strong>
            </p>
          </div>

          {/* Abstract Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-sm p-6 shadow-2xl overflow-hidden group hover:border-indigo-500/50 transition-colors duration-500">
              {/* Fake UI Elements */}
              <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-2 w-32 bg-slate-700 rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/50">
                  <div className="flex items-center space-x-3 mb-3 text-cyan-400">
                    <Activity size={24} />
                    <span className="font-semibold text-slate-200">Velocity</span>
                  </div>
                  <div className="h-16 flex items-end space-x-1">
                    {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-cyan-500/50 rounded-t-sm hover:bg-cyan-400 transition-all"></div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/50">
                  <div className="flex items-center space-x-3 mb-3 text-indigo-400">
                    <Users size={24} />
                    <span className="font-semibold text-slate-200">Contributors</span>
                  </div>
                   <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-600 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 w-3/4"></div>
                      </div>
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>New</span>
                        <span>+124%</span>
                      </div>
                   </div>
                </div>

                 <div className="col-span-2 bg-slate-700/30 p-4 rounded-xl border border-slate-600/50 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                         <ShieldCheck size={24} />
                      </div>
                      <div>
                        <div className="text-slate-200 font-semibold">Security Scan</div>
                        <div className="text-xs text-slate-400">Automated Daily Check</div>
                      </div>
                    </div>
                    <div className="text-green-400 font-bold px-3 py-1 bg-green-500/10 rounded border border-green-500/20">
                      PASSED
                    </div>
                </div>
              </div>
              
              {/* Floating element */}
              <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">OS</div>
                    <div>
                      <div className="text-slate-900 font-bold text-sm">Open Source First</div>
                      <div className="text-slate-500 text-xs">Community Powered</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;