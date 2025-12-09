import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { BsTelephone } from 'react-icons/bs';
import { CiMobile3 } from 'react-icons/ci';
import { FaTv } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-[#30204D] to-[#533589] pt-20 sm:pt-24 lg:pt-32 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
      {/* Content */}
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

          <p className="mt-4 text-sm sm:text-base text-white/90">
            Système téléphonique professionnel avec{' '}
            <span className="font-semibold">
              enregistrement, archivage et intégration native
            </span>{' '}
            à votre écosystème financier
          </p>

          <div
            className="my-6 sm:my-8 lg:my-10 w-full max-w-[600px] h-[1px] mx-auto lg:mx-0"
            style={{
              background:
                'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
            }}
          />

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 uppercase text-[11px] sm:text-sm font-semibold text-white">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FF9500] rounded-full flex items-center justify-center text-white">
                <CiMobile3 size={22} />
              </div>
              <span>APPLICATION MOBILE</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FF9500] rounded-full flex items-center justify-center text-white">
                <FaTv size={22} />
              </div>
              <span>INTERFACE WEB</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FF9500] rounded-full flex items-center justify-center text-white">
                <BsTelephone size={22} />
              </div>
              <span>POSTE PHYSIQUE</span>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full lg:w-auto flex justify-center">
          <div className="border rounded-2xl p-4 sm:p-5 bg-white/10 backdrop-blur-md border-white/20 shadow-lg w-full max-w-[280px] sm:max-w-[320px]">
            <h1 className="font-bold text-lg sm:text-xl text-white text-center lg:text-left">
              À partir de 25.95${' '}
              <span className="text-[#FF9500]">CAD/mois</span>
            </h1>

            <button className="mt-4 bg-[#FF9500]/90 hover:bg-[#da8106] rounded-full py-2.5 px-4 w-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
              <span className="font-bold text-white text-sm">
                Calculer mon forfait
              </span>

              <div className="bg-white rounded-full flex items-center justify-center p-1">
                <ArrowRight size={16} className="text-black" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
