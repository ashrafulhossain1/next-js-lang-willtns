import Image from 'next/image';
import React from 'react';

export default function AuditScopeCard() {
  return (
    <div
      className="
        w-full sm:max-w-[420px] 
        px-4 sm:px-6 py-5 border rounded-2xl md:rounded-3xl 
        relative overflow-hidden bg-white

        before:content-[''] before:absolute before:inset-0 
        before:rounded-2xl md:before:rounded-3xl 
        before:bg-gradient-to-b 
        before:from-[#d1800e33] before:via-transparent before:to-[#FF950044] 
        before:blur-xl before:opacity-70 before:-z-10
      "
    >
      {/* Title */}
      <div>
        <h1 className="uppercase flex flex-wrap gap-2">
          <span className="font-bold text-sm sm:text-base lg:text-2xl">
            SOC 2
          </span>
          <span className="font-bold text-sm sm:text-base lg:text-2xl text-[#FF9500]">
            Type II
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg">
          Audit de sécurité, disponibilité, intégrité, confidentialité et vie
          privée.
        </p>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center mt-4 gap-4 flex-wrap">
        <div className="relative w-14 sm:w-20 aspect-[80/106] hover:scale-105 transition">
          <Image
            src={`/logos/cirtificate-1.png`}
            alt={`certificate`}
            fill
            className="object-contain"
          />
        </div>

        <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 hover:scale-105 transition border rounded-full">
          <Image
            src={`/logos/cirtificate-2.png`}
            alt={`certificate`}
            fill
            className="object-contain p-2"
          />
        </div>
      </div>

      {/* Info Bar */}
      <div className="bg-gradient-to-r from-[#30204D] to-[#533589] text-white py-3 px-3 sm:px-4 flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 rounded-xl">
        <div className="flex items-center gap-3">
          <Image
            src="/images/telephonia/calander.svg"
            alt="Calendar"
            width={32}
            height={32}
          />
          <span className="text-xs sm:text-sm font-medium">Obtained: 2025</span>
        </div>

        <div className="flex items-center gap-3">
          <Image
            src="/images/telephonia/find.svg"
            alt="Audit"
            width={32}
            height={32}
          />
          <span className="text-xs sm:text-sm font-medium">Annual Audit</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 mt-6">
        <h1 className="uppercase flex flex-wrap gap-2">
          <span className="font-bold text-sm sm:text-base lg:text-2xl">
            Conformité et
          </span>
          <span className="font-bold text-sm sm:text-base lg:text-2xl text-[#FF9500]">
            gouvernance
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg">
          Cette certification vérifie, pendant plusieurs mois, que tous les
          contrôles internes d'une entreprise fonctionnent réellement.
        </p>

        <p className="text-sm sm:text-base md:text-lg">
          Cette certification vérifie, pendant plusieurs mois, que tous les
          contrôles internes d'une entreprise fonctionnent réellement.
        </p>

        <p className="text-sm sm:text-base md:text-lg">
          L'audit couvre 5 aspects : sécurité, intégrité, disponibilité,
          confidentialité et vie privée.
        </p>
      </div>

      {/* Divider */}
      <div className="my-6 h-[1px] w-full bg-gray-200"></div>

      {/* Articles */}
      <div>
        <h1 className="uppercase flex gap-2 flex-wrap">
          <span className="font-bold text-sm sm:text-base md:text-lg">
            Articles
          </span>
          <span className="font-bold text-sm sm:text-base md:text-lg text-[#FF9500]">
            couverts
          </span>
        </h1>

        <div className="flex flex-col gap-5 mt-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <Image
                src="/images/check-orange.svg"
                width={20}
                height={20}
                alt="check"
                className="mt-1"
              />
              <div>
                <h3 className="text-sm md:text-xl font-bold text-[#FF9500]">
                  Loi 25 – Article 3.1
                </h3>
                <p className="text-xs md:text-lg text-black leading-relaxed">
                  mesures de sécurité raisonnables pour protéger les
                  renseignements personnels
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Notice Box */}
      <div className="relative w-full p-4 md:p-6 border bg-[#F6F5F9] border-purple-800 rounded-3xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8">
        <span className="absolute inset-0 rounded-3xl animate-snake-border pointer-events-none"></span>

        <div className="shrink-0 relative z-10">
          <Image
            src="/images/telephonia/Frame-1.svg"
            alt="Logo de validation"
            width={78}
            height={78}
            className="w-14 h-14 sm:w-20 sm:h-20 bg-purple-800 p-2 rounded-full"
          />
        </div>

        <p className="text-black text-center sm:text-left relative z-10 text-xs sm:text-base lg:text-lg px-2">
          SOC 2 Type II démontre que TnS fait auditer ses pratiques de sécurité
          et de confidentialité de la même façon qu'une banque canadienne.
        </p>
      </div>
    </div>
  );
}
