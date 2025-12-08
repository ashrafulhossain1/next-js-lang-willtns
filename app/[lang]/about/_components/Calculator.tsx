import React from 'react';
import CalculatorHeading from './CalculatorHeading';

export default function Calculator() {
  return (
    <div>
      <div className="max-w-[1300px] mx-auto">
        <div>
          <CalculatorHeading></CalculatorHeading>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div></div>
        </div>
      </div>
    </div>
  );
}
