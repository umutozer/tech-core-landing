import React from 'react';
import { Layout, Cpu, Cloud, Smartphone, Code, BarChart } from 'lucide-react';

const features = [
  {
    title: 'Özel Yazılım Geliştirme',
    desc: 'İhtiyaçlarınıza tam uygun, ölçeklenebilir ve modern mimarili yazılım çözümleri.',
    icon: <Code className="text-primary" />
  },
  {
    title: 'Bulut Entegrasyonu',
    desc: 'AWS ve Azure altyapıları ile işinizi buluta taşıyın, maliyetlerinizi optimize edin.',
    icon: <Cloud className="text-primary" />
  },
  {
    title: 'Yapay Zeka Çözümleri',
    desc: 'Verilerinizi anlamlı içgörülere dönüştüren AI ve ML modelleri geliştiriyoruz.',
    icon: <Cpu className="text-primary" />
  },
  {
    title: 'Mobil Uygulamalar',
    desc: 'iOS ve Android için yüksek performanslı native ve cross-platform deneyimler.',
    icon: <Smartphone className="text-primary" />
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4 text-darkBg">Uçtan Uca Çözümler</h2>
          <p className="text-secondary max-w-xl mx-auto">İşletmenizi dijital dünyada bir adım öne çıkaracak tüm teknolojik altyapıyı sağlıyoruz.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading">{f.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;