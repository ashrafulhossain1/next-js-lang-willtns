'use client';
import Lottie from 'lottie-react';
import { ArrowRight } from 'lucide-react';
import communicationAnimation from './communication.json';

export default function Functional() {
  return (
    <div className="max-w-[1300px] mx-auto py-[82px] md:mt-[60px] px-4 bg-gray-50 rounded-4xl">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        {/* left */}
        <div className="lg:w-8/12 text-center lg:text-left">
          <h1 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[50px] leading-tight uppercase font-bold text-black">
            Fonctionnalités <br className="hidden lg:block" />
            <span className="text-[#FF9500]">incluses</span>
          </h1>
          <p className="text-black py-5 max-w-[600px] mx-auto lg:mx-0">
            Système téléphonique complet avec messagerie, gestion d'appels
            avancée, qualité HD et plus de 20 fonctionnalités professionnelles
            incluses.
          </p>

          <div>
            <button className="mt-4 bg-[#FF9500]/90 hover:bg-[#da8106] rounded-full py-2.5 px-4 inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
              <span className="font-bold text-white text-sm">
                Serveurs canadiens
              </span>

              <div className="bg-white rounded-full flex items-center justify-center p-1">
                <ArrowRight size={16} className="text-black" />
              </div>
            </button>
          </div>
        </div>

        {/* right */}
        <div className="lg:w-4/12 w-full flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <Lottie
              animationData={communicationAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
