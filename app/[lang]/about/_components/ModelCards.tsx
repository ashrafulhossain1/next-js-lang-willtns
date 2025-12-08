'use client';
import Image from 'next/image';
import { Card } from './actions/modelsData';

type Props = {
  data: Card;
};

export default function ModelCards({ data }: Props) {
  return (
    <div className="flex items-stretch md:gap-6">
      {/* Left vertical line */}
      <div
        className="w-[1px] h-full min-h-[180px]"
        style={{
          background:
            'linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)',
        }}
      />

      {/* Content */}
      <div className="flex flex-col gap-2 justify-center items-center w-[420px]">
        <button className="p-2 h-11 w-11 rounded-full flex justify-center bg-[#FF9500]">
          <Image
            src={data?.image}
            alt={data.name}
            height={36}
            width={36}
            className="object-cover rounded-md border"
          />
        </button>

        <h2 className="text-lg md:text-2xl font-bold">
          {data.name.split(' ').map((word, index) => (
            <span
              key={index}
              className={index === 0 ? 'text-white' : 'text-[#FF9500]'}
            >
              {word}{' '}
            </span>
          ))}
        </h2>
        <div className="w-full rounded-md bg-gradient-to-r from-[#340a0a04] via-[#ffffff57] to-[#fff0]">
          <h4 className="text-center sm:text-xs text-lg font-bold py-2 text-white uppercase">
            {data.price} CAD/mois
          </h4>
        </div>
        <p className="text-base mt-2">{data.info}</p>
      </div>

      {/* Right vertical line */}
      <div
        className="w-[1px] h-full min-h-[180px]"
        style={{
          background:
            'linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)',
        }}
      />
    </div>
  );
}
