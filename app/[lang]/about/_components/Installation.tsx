import { FaCalculator } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';

export default function Installation() {
  return (
    <div className="bg-[#F6F5F9]  w-full py-10 sm:py-12 md:py-[140px] px-5 md:px-10 text-black">
      <div className="w-full md:max-w-[1300px] mx-auto">
        {/* Section Title */}
        <h2 className="text-xl md:text-3xl lg:text-[45px] font-bold uppercase text-center mb-10">
          <span className="text-black">Installation</span>
          <span className="text-[#FF9500]"> professionnelle</span>
        </h2>

        {/* Card */}
        <div className="flex gap-5">
          {/* Left Side */}
          <div className="bg-white  flex-1 p-4 md:p-10 h-[423.23px] rounded-[30px]">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Installation téléphonique complète
            </h2>
            <p className="text-black mb-6 leading-relaxed">
              Installation professionnelle complète incluant configuration du
              système, programmation des postes, formation des utilisateurs et
              mise en service de votre solution téléphonique d'entreprise.
            </p>

            <ul className="space-y-4">
              {[
                'Configuration du système téléphonique',
                'Programmation des postes utilisateurs',
                'Formation complète des équipes',
                'Mise en service professionnelle',
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4 relative">
                  {/* Circle + Vertical Line */}
                  <div className="relative flex flex-col items-center">
                    <div className="min-w-[32px] min-h-[32px] w-8 h-8 flex items-center justify-center rounded-full bg-[#FF9500] z-10">
                      <GiCheckMark className="text-white text-[16px] md:text-lg" />
                    </div>
                    {i !== 3 && (
                      <div className="w-[2px] h-full bg-[#FF9500] mt-1"></div>
                    )}
                  </div>

                  {/* Text */}
                  <span className="text-base md:text-lg text-black font-bold">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div
            className="flex-1 bg-gradient-to-b from-[#533589] to-[#30204D] flex items-center justify-center h-[423.23px] 
          rounded-[30px]"
          >
            <div className="w-full  rounded-[20px] flex flex-col items-center justify-center text-center p-6">
              {/* Price */}
              <h2 className="text-[45px] font-bold">
                <span className="text-white">90$</span>{' '}
                <span className="text-[#FF9500]">CAD</span>
              </h2>

              {/* Subtext */}
              <p className="text-white text-lg mt-1">Frais unique</p>

              {/* Button */}
              <button className="mt-4 bg-[#FF9500]/90 hover:bg-[#da8106] rounded-full py-2.5 px-4 inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
                <span className="font-bold text-white text-sm">
                  Serveurs canadiens
                </span>
                <div className="bg-white rounded-full flex items-center justify-center p-1">
                  <FaCalculator size={16} className="text-black" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
