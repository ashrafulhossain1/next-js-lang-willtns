'use client';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';
import { useState } from 'react';

interface ServiceItem {
  id: number;
  name: string;
  price: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    name: 'Service IVR (voix professionnelle bilingue)',
    price: '5$ CAD / mois',
  },
  { id: 2, name: 'Service SMS Marketing', price: '3$ CAD / mois' },
  { id: 3, name: 'Service Répondeur Automatique', price: '7$ CAD / mois' },
  { id: 4, name: 'Service Analytics Avancé', price: '10$ CAD / mois' },
];

export default function CalculatorCheckBox() {
  // State of checkbox
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-5 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="text-lg font-bold w-[310px] border border-purple-800 p-4 md:p-7 rounded-[10px] bg-[#F6F5F9]"
            >
              <label className="flex justify-start items-start gap-2 cursor-pointer text-lg">
                <Checkbox
                  checked={!!checkedItems[service.id]}
                  onCheckedChange={() => handleCheckboxChange(service.id)}
                />
                <span className="relative -top-2">{service.name}</span>
              </label>
              <p className="relative left-6 text-base md:text-lg font-normal text-black">
                {service.price}
              </p>
            </div>
          ))}
        </div>
        <div className="text-black space-y-2 flex justify-between items-center text-lg bg-[#F6F5F9] px-6 py-5 rounded-full border border-purple-200 my-2">
          {/* Title */}
          <h2 className="text-lg font-bold flex items-center justify-center gap-2 uppercase">
            Services obligatoires :
          </h2>

          {/* First service */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/about/ok-check.svg"
              alt="ok check"
              height={16}
              width={16}
            />
            <span>Installation VoIP professionnelle : 90$ CAD (unique)</span>
          </div>

          {/* Second service */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/about/ok-check.svg"
              alt="ok check"
              height={16}
              width={16}
            />
            <span>Service E911 réglementaire : 0.95$ CAD/mois</span>
          </div>
        </div>
      </div>
    </>
  );
}
