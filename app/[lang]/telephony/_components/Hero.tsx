'use client';

import Image from 'next/image';
import Lottie from 'lottie-react';
import heroAnimation from './telephonia-hero.json';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-[#30204D] to-[#533589] pt-20 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
      <div className="relative z-10 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 gap-10">
        {/* Left */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[50px] leading-tight uppercase font-bold mb-4 text-white">
            La seule téléphonie qui transforme vos appels{' '}
            <br className="hidden lg:block" />
            <span className="text-[#FF9500]">en données</span>
          </h1>

          <Image
            src="/images/line.png"
            alt="Underline"
            width={180}
            height={14}
            className="mx-auto lg:mx-0"
          />
          <div
            className="my-6 sm:my-8 lg:my-10 w-full max-w-[600px] h-[1px] mx-auto lg:mx-0"
            style={{
              background:
                'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
            }}
          />

          <p className="mt-4 text-sm sm:text-base text-white/90">
            Système téléphonique professionnel avec{' '}
            <span className="font-semibold">
              enregistrement, archivage et intégration native
            </span>{' '}
            à votre écosystème financier
          </p>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-auto flex justify-center">
          <div className="border rounded-2xl p-4 sm:p-5 bg-white/10 backdrop-blur-md border-white/20 shadow-lg w-full max-w-[280px] sm:max-w-[320px]">
            <Lottie
              animationData={heroAnimation}
              loop={true}
              className="w-full h-[280px] sm:h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
