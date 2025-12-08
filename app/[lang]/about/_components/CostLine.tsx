import React from 'react';

interface CostLineProps {
  title: string;
  titleColor?: string; // optional, default #FF9500
  buttonText: string;
}

export default function CostLine({
  title,
  titleColor = '#FF9500',
  buttonText,
}: CostLineProps) {
  return (
    <div className="w-full md:w-2/3 mx-auto flex justify-between items-center my-5 pt-4">
      <h2 className="text-lg font-bold uppercase" style={{ color: titleColor }}>
        {title}
      </h2>
      <button className="bg-[#FF9500] font-bold px-5 text-lg py-2.5 rounded-full text-white">
        {buttonText}
      </button>
    </div>
  );
}
