
import React from 'react';
import { ShieldCheck, Zap, Clock, Heart, Sparkles, Layout } from 'lucide-react';

export const Advantages = () => {
  const advantages = [
    { icon: <Zap />, title: "Efisiensi Maksimal", desc: "Hemat waktu berjam-jam setiap hari dengan sistem yang sudah teruji." },
    { icon: <Sparkles />, title: "Desain Premium", desc: "Dibuat oleh desainer profesional dengan fokus pada estetika minimalis." },
    { icon: <Clock />, title: "Akses Seumur Hidup", desc: "Beli sekali, miliki selamanya tanpa biaya langganan bulanan." },
    { icon: <ShieldCheck />, title: "Keamanan Terjamin", desc: "Sistem pembayaran yang aman dan link download yang selalu aktif." },
    { icon: <Layout />, title: "Mudah Dikustomisasi", desc: "Semua template fleksibel dan bisa disesuaikan dengan kebutuhan Anda." },
    { icon: <Heart />, title: "Dukungan Penuh", desc: "Tim support kami siap membantu jika Anda menemukan kendala teknis." }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold font-serif mb-6">Mengapa Memilih Kami?</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Kami tidak hanya menjual file digital, kami menjual solusi untuk produktivitas Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className="p-10 rounded-3xl border border-slate-200 hover:border-indigo-600 transition-all group">
              <div className="w-12 h-12 text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
              <p className="text-slate-500 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" alt="Quality" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-serif">Kualitas Tanpa Kompromi</h2>
            <p className="text-slate-500 leading-relaxed text-lg">
              Setiap aset digital di toko kami melalui proses kontrol kualitas yang ketat. Kami memastikan bahwa setiap baris kode di UI Kit atau setiap formula di template Notion berfungsi dengan sempurna sebelum sampai ke tangan Anda.
            </p>
            <div className="flex gap-4 items-center p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
              <div className="font-bold text-indigo-600 text-2xl">99%</div>
              <p className="text-sm text-indigo-700 font-medium">Tingkat kepuasan pelanggan berdasarkan survei tahun 2023.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
