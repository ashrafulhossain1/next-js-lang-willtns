import React from 'react';

export default function CalculatorHeading() {
  return (
    <>
      <h1 className=" font-bold text-xl md:text-3xl lg:text-[45px] mb-4 uppercase">
        <span className="text-white">Calculateur de </span>
        <span className="text-[#FF9500]">forfait VoIP</span>
      </h1>
      <p className="font-medium">
        Personnalisez votre solution et voyez les coûts en temps réel
      </p>
    </>
  );
}
