
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Fixed FAQItem component type to properly handle React's special 'key' prop during list rendering
const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:text-indigo-600 transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question: "Bagaimana cara saya menerima produk setelah membayar?",
      answer: "Setelah pembayaran dikonfirmasi (secara otomatis), Anda akan dialihkan ke halaman 'Download' dan juga akan menerima email berisi link akses permanen ke produk Anda."
    },
    {
      question: "Apakah ada biaya bulanan?",
      answer: "Tidak. Semua produk kami adalah sekali bayar (one-time purchase) untuk akses seumur hidup, termasuk update di masa depan jika tersedia."
    },
    {
      question: "Bisakah saya meminta pengembalian dana?",
      answer: "Karena produk kami berbentuk digital yang dapat diunduh langsung, kami tidak menyediakan pengembalian dana setelah produk diunduh. Namun jika ada kendala teknis, tim support kami siap membantu 24/7."
    },
    {
      question: "Apakah template ini bisa diedit?",
      answer: "Tentu! Template Notion dapat di-duplicate, Canva dapat di-edit di akun gratis/pro, dan UI Kits tersedia dalam format Figma yang fully editable."
    }
  ];

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">Pusat Bantuan</h1>
          <p className="text-slate-500">Pertanyaan yang sering diajukan mengenai produk kami.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
};
