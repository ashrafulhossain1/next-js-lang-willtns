import React from 'react';

interface DividerProps {
  width?: string;
}

export default function Divider({ width = 'w-full' }: DividerProps) {
  return (
    <div
      className={`lg:mx-0 relative left-2/12 h-px w-2/3 mx-auto`}
      style={{
        background:
          'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
      }}
    />
  );
}
