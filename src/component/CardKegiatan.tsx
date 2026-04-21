import React from 'react';
import Button from './ui/Button'; 

interface CardKegiatanProps {
  title: string;
  description: string;
}

export const CardKegiatan: React.FC<CardKegiatanProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl border-2 border-pink-50 border-r-8 border-r-red-900 shadow-xl flex flex-col justify-between h-full hover:scale-105 transition-transform duration-300">
      <div>
        <h3 className="text-2xl font-bold text-red-900 mb-4">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
      <div className="mt-3">
        <Button tittle="INFO SELENGKAPNYA" variant="primary" className="w-full" />
      </div>
    </div>
  );
};