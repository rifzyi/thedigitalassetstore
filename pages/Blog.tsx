
import React from 'react';
import { BLOG_POSTS } from '../data';
import { Calendar, ArrowRight } from 'lucide-react';

export const Blog = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-serif mb-4">Resources & Inspirasi</h1>
          <p className="text-slate-500 max-w-xl mx-auto">Tingkatkan skill dan pengetahuan Anda dengan artikel pilihan dari tim ahli kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 relative">
                <img src={post.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors leading-snug">{post.title}</h2>
              <p className="text-slate-500 mb-6 line-clamp-2 leading-relaxed">{post.excerpt}</p>
              <button className="flex items-center gap-2 font-bold text-indigo-600">
                Baca Selengkapnya
                <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
