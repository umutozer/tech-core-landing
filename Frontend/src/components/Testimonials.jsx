import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Caner Aydın', role: 'CEO, FintechX', text: 'TechCore ile çalışmak projemizin kaderini değiştirdi. Beklediğimizden çok daha hızlı ve sağlam bir altyapı teslim ettiler.' },
  { name: 'Elif Yılmaz', role: 'CTO, LogiTrack', text: 'Teknik yetkinlikleri ve çözüm odaklı yaklaşımları mükemmel. Modern teknolojileri projeye entegre etme hızları bizi şaşırttı.' }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-heading text-center mb-16">Müşteri Deneyimleri</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="p-10 rounded-3xl bg-slate-50 border border-slate-100 relative">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#0ea5e9" className="text-primary" />)}
              </div>
              <p className="text-lg text-textColor italic mb-6">"{rev.text}"</p>
              <div>
                <h4 className="font-bold font-heading">{rev.name}</h4>
                <p className="text-secondary text-sm">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;