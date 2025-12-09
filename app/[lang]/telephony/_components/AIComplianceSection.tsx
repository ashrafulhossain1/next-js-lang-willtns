import SectionTitle from '@/app/components/reuseable/SectionTitle';
import React from 'react';
import AIComplianceLeft from './AIComplianceLeft';
import AIComplianceCard from './AIComplianceCard';

export default function AIComplianceSection() {
  return (
    <div className="bg-gradient-to-r from-[#30204D] to-[#533589] py-16 sm:py-20 md:py-24 lg:py-[140px] mt-20">
      <div className="max-w-[1300px] mx-auto">
        {/* heding */}
        <div className="flex justify-center items-center text-center">
          <h3 className="uppercase">
            <SectionTitle
              textColor="text-white"
              text="L'intelligence artificielle au service de la conformité et de la"
            ></SectionTitle>{' '}
            <SectionTitle text="protection des données."></SectionTitle>
          </h3>
        </div>
        {/* left side */}
        <AIComplianceLeft></AIComplianceLeft>
        <AIComplianceCard></AIComplianceCard>
      </div>
    </div>
  );
}
