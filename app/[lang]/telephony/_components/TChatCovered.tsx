import SectionTitle from '@/app/components/reuseable/SectionTitle';
import Subtitle from '@/app/components/reuseable/Subtitle';
import React from 'react';
import TChatCoveredCard, { TChatCardData } from './TChatCoveredCard';
import { chatCardDatas } from './actions/TChatCardData';

export default function TChatCovered() {
  return (
    <div className="bg-gradient-to-r from-[#30204D] to-[#533589] py-16 sm:py-20 md:py-24 lg:py-[140px] mt-20">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* heading */}
        <div className="text-center">
          <h1 className="space-y-2">
            <SectionTitle
              text="Cadre réglementaire couvert par"
              textColor="text-white"
            />
            <SectionTitle text="Tchat N Sign" />
          </h1>

          <h5 className="mt-6">
            <Subtitle
              text={`Nos processus techniques et nos mécanismes d'archivage sont conçus pour répondre à ces obligations sans
              alourdir les opérations quotidiennes des conseillers.`}
              textColor="text-white"
            />
          </h5>
        </div>
        {/* 3  cards  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {chatCardDatas.map((item: TChatCardData, index: number) => (
            <TChatCoveredCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
