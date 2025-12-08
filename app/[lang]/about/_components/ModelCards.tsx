'use client';
import Image from 'next/image';
import { Card } from './actions/modelsData';

type Props = {
  data: Card;
};

export default function ModelCards({ data }: Props) {
  console.log(data.image);
  return (
    <div className="w-full">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 group-hover:scale-105 transition-transform duration-300">
        <button className="p-2 h-11 w-11 rounded-full flex justify-center bg-[#FF9500]">
          <Image
            src={data?.image}
            alt={data.name}
            height={36}
            width={36}
            className="object-cover rounded-md border "
          />
        </button>
        <h2 className="text-lg font-bold">{data.name}</h2>
        <p className="text-sm text-gray-500">{data.price}</p>
        <p className="text-sm mt-2">{data.info}</p>
      </div>
    </div>
  );
}
