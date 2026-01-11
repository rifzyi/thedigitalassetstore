
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const BeforeAfterPage = () => {
  const comparisons = [
    {
      title: "Manajemen Tugas Notion",
      before: "Daftar tugas yang tercecer di berbagai kertas, aplikasi, dan catatan HP. Sering melewatkan tenggat waktu.",
      after: "Satu dashboard terpusat dengan sistem pengingat otomatis, prioritas harian, dan pelacakan progress mingguan.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Branding Instagram",
      before: "Feed yang tidak konsisten warnanya, font yang berubah-ubah, dan menghabiskan 2 jam hanya untuk membuat 1 post.",
      after: "Feed estetik dengan template Canva siap pakai. Cukup ganti teks dan gambar dalam 5 menit, hasil tetap profesional.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold font-serif mb-6">Transformasi Nyata</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Bandingkan bagaimana alur kerja Anda berubah sebelum dan sesudah menggunakan aset kami.</p>
        </div>

        <div className="space-y-32">
          {comparisons.map((item, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl font-bold font-serif">{item.title}</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-100 flex gap-4">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                    <div>
                      <p className="font-bold text-red-900 mb-1">Sebelum</p>
                      <p className="text-red-700 text-sm leading-relaxed">{item.before}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                    <div>
                      <p className="font-bold text-emerald-900 mb-1">Sesudah</p>
                      <p className="text-emerald-700 text-sm leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                  <img src={item.image} className="w-full h-auto" alt={item.title} />
                  <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
