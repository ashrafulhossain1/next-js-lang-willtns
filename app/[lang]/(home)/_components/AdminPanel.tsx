import Image from 'next/image';
import React from 'react';

export default function AdminPanel() {
  return (
    <div className="py-20 text-black bg-gradient-to-r from-[#30204D] to-[#533589]">
      <div className="max-w-[1300px] mx-auto">
        {/* heading */}
        <div className="flex justify-center items-center flex-col p-4 text-center">
          <h3 className="text-white text-3xl font-bold md:text-[45px]">
            Interface web complète pour la gestion
          </h3>
          <p className="text-lg mt-3 w-10/12 text-center text-[#FF9500]">
            Gérez toutes vos communications et archivages depuis une interface
            web puissante
          </p>
        </div>
        {/* two image of admin panel */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* card 1 */}
          <div className="border w-full md:w-1/2 p-4 rounded-2xl mt-10 mx-auto bg-white/5 backdrop-blur-md border-white/30">
            <div className="border rounded-xl overflow-hidden">
              <Image
                className="object-cover w-full h-[377px]"
                src="/images/home/admin-1.png"
                alt="Admin Image"
                height={377}
                width={600}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="w-full  rounded-md bg-gradient-to-r from-[#340a0a04] via-[#ffffff57] to-[#fff0]">
              <h4 className="text-center text-2xl font-bold uppercase py-2 text-white mt-6">
                Gestion des{' '}
                <span className="text-[#FF9500]">conversations</span>
              </h4>
            </div>

            <p className=" text-white/90 text-center mt-4">
              Vue d'ensemble de toutes vos conversations client avec filtres et
              recherche avancée.
            </p>
          </div>
          {/* card 2 */}
          <div className="border w-full md:w-1/2 p-4 rounded-2xl mt-10 mx-auto bg-white/5 backdrop-blur-md border-white/30">
            <div className="border rounded-xl overflow-hidden">
              <Image
                className="object-cover w-full h-[377px]"
                src="/images/home/admin-2.png"
                alt="Admin Image"
                height={377}
                width={600}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="w-full mt-2 rounded-md bg-gradient-to-r from-[#340a0a04] via-[#ffffff57] to-[#fff0]">
              <h4 className="text-center text-2xl font-bold uppercase py-2 text-white mt-6">
                Archivage et gestion{' '}
                <span className="text-[#FF9500]"> des appels</span>
              </h4>
            </div>

            <p className="mt-2 text-white/90 text-center">
              Module complet pour archiver et gérer tous vos appels
              téléphoniques avec métadonnées.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
