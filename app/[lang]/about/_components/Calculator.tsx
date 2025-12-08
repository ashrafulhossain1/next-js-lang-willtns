import React from 'react';
import CalculatorHeading from './CalculatorHeading';
import VoIPCounter from './VoIPCounter';
import CalculatorCheckBox from './CalculatorCheckBox';

export default function Calculator() {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto pt-6 sm:pt-10 md:pt-20 lg:pt-28">
        <div>
          <CalculatorHeading></CalculatorHeading>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <VoIPCounter></VoIPCounter>
          <VoIPCounter></VoIPCounter>
        </div>
        <div className="flex justify-center items-center">
          <CalculatorCheckBox></CalculatorCheckBox>
        </div>
      </div>
    </div>
  );
}
