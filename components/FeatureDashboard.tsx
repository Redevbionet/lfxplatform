import React, { useState } from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  PieChart, Pie, Cell, Tooltip, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip as RechartsTooltip 
} from 'recharts';
import { BarChart3, ShieldAlert, Users, Layout, Zap, ArrowUpRight } from 'lucide-react';
import { VulnerabilityData, ContributorData, WorkDistributionData, TabType } from '../types';

// Data Mock
const vulnData: VulnerabilityData[] = [
  { severity: 'Critical', count: 5, fill: '#ef4444' },
  { severity: 'High', count: 12, fill: '#f97316' },
  { severity: 'Medium', count: 25, fill: '#eab308' },
  { severity: 'Low', count: 45, fill: '#3b82f6' },
];

const contribData: ContributorData[] = [
  { month: 'Jan', contributors: 120, active: 80 },
  { month: 'Feb', contributors: 150, active: 100 },
  { month: 'Mar', contributors: 180, active: 120 },
  { month: 'Apr', contributors: 220, active: 160 },
  { month: 'May', contributors: 300, active: 210 },
  { month: 'Jun', contributors: 450, active: 320 },
];

const workData: WorkDistributionData[] = [
  { category: 'Development', hours: 120, fullMark: 150 },
  { category: 'Review', hours: 98, fullMark: 150 },
  { category: 'Docs', hours: 86, fullMark: 150 },
  { category: 'Testing', hours: 99, fullMark: 150 },
  { category: 'Meeting', hours: 45, fullMark: 150 },
  { category: 'Support', hours: 65, fullMark: 150 },
];

const FeatureDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.DATA);

  const tabs = [
    { id: TabType.DATA, label: 'การตัดสินใจด้วยข้อมูล', icon: Layout, desc: 'มองเห็นภาพรวม 360 องศาของความพยายาม ผลลัพธ์ และเกณฑ์มาตรฐาน' },
    { id: TabType.SECURITY, label: 'ตรวจสอบช่องโหว่', icon: ShieldAlert, desc: 'ตรวจจับช่องโหว่ที่อาจเกิดขึ้นโดยอัตโนมัติและเสนอแนวทางแก้ไข' },
    { id: TabType.COMMUNITY, label: 'มีส่วนร่วมและขยาย', icon: Users, desc: 'ระบุและเพิ่มพูนความสามารถของผู้เข้าร่วมโครงการแต่ละคน' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            ผู้ดูแลระบบ ผู้สนับสนุน และผู้นำ OSPO ต่างพึ่งพา LFX
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            แพลตฟอร์มเดียวที่รวมทุกอย่างที่คุณต้องการเพื่อขับเคลื่อนโครงการโอเพ่นซอร์สไปข้างหน้า
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 bg-slate-50 border-r border-slate-200 p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start space-x-4 mb-2 ${
                  activeTab === tab.id 
                    ? 'bg-white shadow-lg border border-slate-100 scale-[1.02]' 
                    : 'hover:bg-slate-100 opacity-70 hover:opacity-100'
                }`}
              >
                <div className={`p-3 rounded-lg ${activeTab === tab.id ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                  <tab.icon size={24} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${activeTab === tab.id ? 'text-indigo-900' : 'text-slate-700'}`}>
                    {tab.label}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">
                    {tab.desc}
                  </p>
                </div>
              </button>
            ))}
            
            <div className="p-6 mt-4 bg-indigo-50 m-2 rounded-xl border border-indigo-100">
              <div className="flex items-center space-x-2 text-indigo-800 font-semibold mb-2">
                <Zap size={18} />
                <span>ใช้เครื่องมือที่คุณต้องการ</span>
              </div>
              <p className="text-sm text-indigo-700/80">
                เลือกจากตัวเชื่อมต่อที่มีอยู่กับเครื่องมือชุมชนที่คุณต้องการและเริ่มติดตามกิจกรรม
              </p>
            </div>
          </div>

          {/* Visualization Area */}
          <div className="lg:w-2/3 p-8 lg:p-12 min-h-[500px] flex flex-col">
             
             {/* Dynamic Content Header */}
             <div className="mb-8 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {tabs.find(t => t.id === activeTab)?.label}
                  </h3>
                  <p className="text-slate-500">
                    แสดงผลข้อมูลแบบเรียลไทม์เพื่อการวิเคราะห์ที่แม่นยำ
                  </p>
                </div>
                <button className="text-indigo-600 font-semibold flex items-center hover:underline">
                   ดูรายงานฉบับเต็ม <ArrowUpRight size={18} className="ml-1" />
                </button>
             </div>

             {/* Chart Container */}
             <div className="flex-1 bg-white border border-slate-100 rounded-2xl flex items-center justify-center relative">
               
               {activeTab === TabType.DATA && (
                 <div className="w-full h-[350px]">
                   <h4 className="absolute top-4 left-4 text-sm font-bold text-slate-400 uppercase tracking-wider">ตารางการกระจายเวลาทำงาน</h4>
                   <ResponsiveContainer width="100%" height="100%">
                     <RadarChart cx="50%" cy="50%" outerRadius="80%" data={workData}>
                       <PolarGrid />
                       <PolarAngleAxis dataKey="category" tick={{ fill: '#64748b', fontSize: 12 }} />
                       <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#cbd5e1" />
                       <Radar name="Hours" dataKey="hours" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.5} />
                       <Tooltip />
                     </RadarChart>
                   </ResponsiveContainer>
                 </div>
               )}

               {activeTab === TabType.SECURITY && (
                 <div className="w-full h-full flex flex-col md:flex-row items-center justify-around">
                    <div className="w-full md:w-1/2 h-[300px]">
                       <h4 className="absolute top-4 left-4 text-sm font-bold text-slate-400 uppercase tracking-wider">แผนภูมิช่องโหว่ตามความรุนแรง</h4>
                       <ResponsiveContainer width="100%" height="100%">
                         <PieChart>
                           <Pie
                             data={vulnData}
                             innerRadius={60}
                             outerRadius={80}
                             paddingAngle={5}
                             dataKey="count"
                           >
                             {vulnData.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.fill} />
                             ))}
                           </Pie>
                           <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                         </PieChart>
                       </ResponsiveContainer>
                    </div>
                    <div className="w-full md:w-1/3 space-y-4">
                      {vulnData.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                            <span className="font-medium text-slate-700">{item.severity}</span>
                          </div>
                          <span className="font-bold text-slate-900">{item.count}</span>
                        </div>
                      ))}
                    </div>
                 </div>
               )}

               {activeTab === TabType.COMMUNITY && (
                 <div className="w-full h-[350px]">
                   <h4 className="absolute top-4 left-4 text-sm font-bold text-slate-400 uppercase tracking-wider">แผนภูมิผู้สนับสนุนใหม่</h4>
                   <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={contribData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                       <defs>
                         <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                           <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                         </linearGradient>
                         <linearGradient id="colorContrib" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                           <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                         </linearGradient>
                       </defs>
                       <XAxis dataKey="month" stroke="#94a3b8" />
                       <YAxis stroke="#94a3b8" />
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                       <RechartsTooltip />
                       <Area type="monotone" dataKey="contributors" stroke="#4f46e5" fillOpacity={1} fill="url(#colorContrib)" />
                       <Area type="monotone" dataKey="active" stroke="#06b6d4" fillOpacity={1} fill="url(#colorActive)" />
                     </AreaChart>
                   </ResponsiveContainer>
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDashboard;