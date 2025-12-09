import Image from 'next/image';
import React from 'react';

export default function AdminPanel() {
  return (
    <div className="py-12 sm:py-14 md:py-16 lg:py-20 bg-gradient-to-r from-[#30204D] to-[#533589] text-white">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <h3
            className="
            font-bold
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-[45px]
          "
          >
            Interface web complète pour la gestion
          </h3>

          <p
            className="
            mt-3 text-[#FF9500]
            text-sm
            sm:text-base
            md:text-lg
            max-w-[90%] sm:max-w-[80%] md:max-w-[70%]
          "
          >
            Gérez toutes vos communications et archivages depuis une interface
            web puissante
          </p>
        </div>

        {/* Cards */}
        <div
          className="
          flex flex-col 
          md:flex-row 
          gap-6 lg:gap-8
        "
        >
          {/* Card 1 */}
          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 lg:p-6">
            {/* Image box with fixed ratio */}
            <div className="relative w-full aspect-[600/377] rounded-xl overflow-hidden border border-white/20">
              <Image
                src="/images/home/admin-1.png"
                alt="Admin Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full mt-6 rounded-md bg-gradient-to-r from-[#ffffff10] via-[#ffffff40] to-transparent">
              <h4
                className="
                text-center font-bold uppercase text-white
                text-lg sm:text-xl md:text-2xl
                py-3
              "
              >
                Gestion des{' '}
                <span className="text-[#FF9500]">conversations</span>
              </h4>
            </div>

            <p
              className="
              mt-4 text-center text-white/90
              text-sm sm:text-base md:text-lg
            "
            >
              Vue d'ensemble de toutes vos conversations client avec filtres et
              recherche avancée.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 lg:p-6">
            <div className="relative w-full aspect-[600/377] rounded-xl overflow-hidden border border-white/20">
              <Image
                src="/images/home/admin-2.png"
                alt="Admin Image"
                fill
                className="object-cover"
              />
            </div>

            <div className="w-full mt-6 rounded-md bg-gradient-to-r from-[#ffffff10] via-[#ffffff40] to-transparent">
              <h4
                className="
                text-center font-bold uppercase text-white
                text-lg sm:text-xl md:text-2xl
                py-3
              "
              >
                Archivage et gestion{' '}
                <span className="text-[#FF9500]">des appels</span>
              </h4>
            </div>

            <p
              className="
              mt-4 text-center text-white/90
              text-sm sm:text-base md:text-lg
            "
            >
              Module complet pour archiver et gérer tous vos appels
              téléphoniques avec métadonnées.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
