import React from 'react';

export default function WaterDrop({ children }) {
  return (
    <div className='relative p-5 md:p-10 shadow-[inset_10px_10px_10px_rgba(0,0,0,0.05),_15px_25px_10px_rgba(0,0,0,0.05),_15px_20px_20px_rgba(0,0,0,0.05),_inset_-10px_-10px_15px_rgba(255,255,255,0)] rounded-full'>
      <div className='absolute top-4 left-3 w-2.5 h-2.5 md:top-8 md:left-6 md:w-5 md:h-5 bg-orange-400 rounded-full' />
      <div className='absolute top-3 left-7 w-1.5 h-1.5 md:top-6 md:left-14 md:w-3 md:h-3 bg-orange-400 rounded-full' />
      {children}
    </div>
  );
}
