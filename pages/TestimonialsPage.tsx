
import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';

export const TestimonialsPage = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold font-serif mb-6">Cerita Sukses Pelanggan</h1>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">Apa yang dikatakan oleh ribuan orang yang telah bertransformasi bersama produk kami.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div key={i} className="break-inside-avoid bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <Quote className="absolute -top-4 -right-4 w-24 h-24 text-slate-50 opacity-5" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />)}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed relative z-10">"{t.content}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <img src={t.avatar + i} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" alt={t.name} />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
