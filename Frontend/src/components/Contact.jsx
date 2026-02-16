import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold font-heading mb-6">Hayalinizdeki projeyi birlikte inşa edelim.</h2>
            <p className="text-secondary mb-10">Fikriniz ne olursa olsun, doğru teknoloji ve uzman ekiple gerçeğe dönüştürmek için hazırız.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Mail size={20}/></div>
                <span className="font-medium">hello@techcore.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Phone size={20}/></div>
                <span className="font-medium">+90 (212) 555 0100</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><MapPin size={20}/></div>
                <span className="font-medium">Levent, İstanbul / Türkiye</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Ad Soyad</label>
                <input type="text" required className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">E-posta</label>
                <input type="email" required className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Mesajınız</label>
              <textarea rows="4" required className="w-full p-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"></textarea>
            </div>
            
            <button 
              disabled={status === 'sending'}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 disabled:opacity-50"
            >
              {status === 'success' ? 'Mesaj Gönderildi!' : status === 'sending' ? 'Gönderiliyor...' : 'Gönder'}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;