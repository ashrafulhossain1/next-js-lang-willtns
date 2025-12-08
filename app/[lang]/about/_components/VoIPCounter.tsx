import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa'; // Phone icon for the service
import { FiMinus, FiPlus } from 'react-icons/fi'; // Minus and Plus for the counter

const VoIPCounter = ({ initialPrice = 25 }) => {
  const [count, setCount] = useState(1);
  const pricePerUser = initialPrice; // CAD/mois

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);
  const handleDecrement = () =>
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));

  const totalCost = (count * pricePerUser).toLocaleString('fr-CA', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Data object to simulate passing props, used here for the price string
  const data = {
    price: `${pricePerUser}$ × ${count} = ${totalCost}`,
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-2xl">
      {/* Outer Card with Rounded Corners and Shadow */}
      <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#5b3e7f] to-[#3a2958]">
        {/* Header Section: VOIP User Count */}
        <div className="flex items-center justify-between p-5">
          {/* Icon and Title */}
          <div className="flex items-center space-x-3 text-white">
            <div className="flex-shrink-0 p-2 rounded-full bg-orange-400">
              <FaPhoneAlt className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider">
              NOMBRE D'UTILISATEURS VOIP
            </span>
          </div>

          {/* Quantity Selector Group */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecrement}
              disabled={count === 1}
              className={`p-1 w-7 h-7 flex items-center justify-center rounded-lg border border-white/30 text-white transition-colors duration-150 ${
                count === 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-white/10'
              }`}
              aria-label="Decrement user count"
            >
              <FiMinus className="w-4 h-4" />
            </button>

            <span className="text-lg font-medium text-white w-6 text-center">
              {count}
            </span>

            <button
              onClick={handleIncrement}
              className="p-1 w-7 h-7 flex items-center justify-center rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors duration-150"
              aria-label="Increment user count"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* --- PRICING BLOCK (Modified to use your design) --- */}
        {/* Your pricing div with the transparent gradient and price text */}
        <div className="w-full">
          <div className="w-full rounded-md bg-gradient-to-r from-[#340a0a04] via-[#ffffff57] to-[#fff0]">
            <h4 className="text-center sm:text-xs text-lg font-bold py-2 text-white uppercase">
              {data.price} CAD/mois
            </h4>
          </div>
        </div>
        {/* ----------------------------------------------------- */}
      </div>
    </div>
  );
};

export default VoIPCounter;
