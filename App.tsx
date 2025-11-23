import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureDashboard from './components/FeatureDashboard';
import Personas from './components/Personas';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <Header />
      <main>
        <Hero />
        <FeatureDashboard />
        <Personas />
        {/* CTA Banner */}
        <section className="bg-indigo-900 py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              พร้อมที่จะยกระดับโครงการของคุณหรือยัง?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all shadow-lg">
                เริ่มต้นใช้งานฟรีวันนี้
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                ติดต่อฝ่ายขาย
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;