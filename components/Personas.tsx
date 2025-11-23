import React from 'react';
import { Terminal, TrendingUp, Building2, CheckCircle2 } from 'lucide-react';

const Personas: React.FC = () => {
  const personas = [
    {
      title: 'LFX สำหรับนักพัฒนา',
      icon: Terminal,
      color: 'bg-blue-500',
      description: 'เร่งการพัฒนาโครงการโอเพ่นซอร์สของคุณด้วยเครื่องมือแบบบูรณาการที่สร้างขึ้นเพื่อปรับปรุงการดำเนินงาน ติดตามสถานะของโครงการ',
      benefits: ['ติดตามสถานะโครงการ', 'ขยายการมีส่วนร่วมชุมชน', 'วางแผนความยั่งยืน']
    },
    {
      title: 'LFX สำหรับผู้นำโครงการ',
      icon: TrendingUp,
      color: 'bg-indigo-500',
      description: 'ติดตามโครงการและสุขภาพของชุมชน ลดความซับซ้อนของการดำเนินงาน และขยายระบบนิเวศของคุณเพื่อความสำเร็จในระยะยาว',
      benefits: ['สุขภาพชุมชน', 'ลดความซับซ้อน', 'ขยายระบบนิเวศ']
    },
    {
      title: 'LFX สำหรับสำนักงานโครงการ',
      icon: Building2,
      color: 'bg-purple-500',
      description: 'เพิ่มผลตอบแทนจากการลงทุนของคุณในโครงการโอเพ่นซอร์สที่สำคัญ และวัดผลความสำเร็จของการสนับสนุนของคุณด้วยเครื่องมือระดับองค์กร',
      benefits: ['ROI ที่ชัดเจน', 'ความโปร่งใส', 'เครื่องมือระดับองค์กร']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h5 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2">ออกแบบมาเพื่อทุกคน</h5>
          <h2 className="text-4xl font-bold text-slate-900 max-w-xl">
            ผู้ที่ทำให้โครงการโอเพนซอร์สประสบความสำเร็จ
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${persona.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                <persona.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {persona.title}
              </h3>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-sm h-24">
                {persona.description}
              </p>

              <ul className="space-y-3">
                {persona.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center space-x-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a href="#" className="text-indigo-600 font-bold text-sm hover:text-indigo-800 flex items-center">
                  เรียนรู้เพิ่มเติม &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;