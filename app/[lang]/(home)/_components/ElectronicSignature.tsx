'use client';
import { useState } from 'react';
import SignatureStackedCarousel from './ElectronicSignatureCarousel';
import SignatureLeftSide from './SignatureLeftSide';

export default function ElectronicSignature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = 5;

  const next = () => setActiveIndex((i) => (i + 1) % totalCards);

  const prev = () => setActiveIndex((i) => (i - 1 + totalCards) % totalCards);

  const setIndex = (index: number) => {
    if (index >= 0 && index < totalCards) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 items-start lg:items-center">
        {/* Left */}
        <div className="w-full">
          <SignatureLeftSide onNext={next} onPrev={prev} />
        </div>
        {/* Right - Stacked Carousel */}
        <div className="w-full flex justify-center lg:justify-start xl:justify-center">
          <SignatureStackedCarousel 
            activeIndex={activeIndex} 
            onSetIndex={setIndex}
          />
        </div>
      </div>
    </section>
  );
}
