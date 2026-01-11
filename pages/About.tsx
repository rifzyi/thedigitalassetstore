
import React from 'react';

export const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold font-serif">Tentang Kami</h1>
          <p className="text-xl text-slate-500 leading-relaxed italic">
            "Membantu kreator dunia bekerja lebih cerdas dengan aset digital yang siap pakai."
          </p>
        </div>

        <div className="aspect-video rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Team" className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg mx-auto text-slate-600">
          <p>
            The Digital Asset Store lahir dari keresahan akan banyaknya waktu yang terbuang untuk tugas-tugas repetitif seperti membuat struktur Notion dari awal, mendesain feed Instagram setiap hari, atau membangun UI kit dari nol.
          </p>
          <p>
            Kami percaya bahwa setiap menit sangat berharga bagi seorang kreator. Itulah mengapa kami mengkurasi dan membangun aset digital premium yang tidak hanya terlihat cantik, tapi juga fungsional dan siap meningkatkan produktivitas Anda secara instan.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Visi Kami</h2>
          <p>
            Menjadi platform nomor satu bagi para profesional kreatif di Indonesia untuk mendapatkan resource digital yang mempermudah perjalanan karier dan bisnis mereka.
          </p>
        </div>
      </div>
    </div>
  );
};
