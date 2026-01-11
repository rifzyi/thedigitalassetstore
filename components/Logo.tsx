
import React from 'react';
import { Layers } from 'lucide-react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'default' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  iconOnly = false,
  variant = 'default' 
}) => {
  const isDarkBg = variant === 'light';

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <div className="relative flex items-center justify-center shrink-0">
        <motion.div 
          className={`absolute inset-0 rounded-full blur-xl scale-150 opacity-30 ${
            isDarkBg ? 'bg-indigo-400' : 'bg-indigo-600'
          }`}
          animate={{ scale: [1.2, 1.5, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className={`relative w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${
            isDarkBg 
              ? 'bg-white text-indigo-600' 
              : 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white'
          }`}
          variants={{
            hover: { y: -2, rotate: 5, scale: 1.05 },
            initial: { y: 0, rotate: 0, scale: 1 }
          }}
        >
          <Layers className="w-6 h-6" strokeWidth={2.5} />
        </motion.div>
      </div>
      
      {!iconOnly && (
        <div className="flex flex-col leading-[1.1]">
          <span className={`text-lg font-black tracking-tight font-serif ${
            isDarkBg ? 'text-white' : 'text-slate-900'
          }`}>
            THE DIGITAL <span className={isDarkBg ? 'text-indigo-300' : 'text-indigo-600'}>ASSET</span>
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-[0.4em] mt-0.5 ${
            isDarkBg ? 'text-slate-400' : 'text-slate-400'
          }`}>
            STORE
          </span>
        </div>
      )}
    </motion.div>
  );
};
