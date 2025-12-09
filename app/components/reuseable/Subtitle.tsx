import React from 'react';

interface SubtitleProps {
  text: string;
  textColor?: string;
}

export default function Subtitle({
  text,
  textColor = 'text-[#FF9500]',
}: SubtitleProps) {
  return (
    <span className={`font-bold text-sm sm:text-base lg:text-lg ${textColor}`}>
      {text}
    </span>
  );
}
