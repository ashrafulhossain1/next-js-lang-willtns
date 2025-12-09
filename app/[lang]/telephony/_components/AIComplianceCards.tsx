'use client';

import Image from 'next/image';

export type FeatureItem = {
  id: number;
  logo: string;
  firstTitle: string;
  secondTitle: string;
  paragraph: string;
};

type AIComplianceCardProps = {
  data: FeatureItem[];
};

export default function AIComplianceCards({ data }: AIComplianceCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 justify-center items-center">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-stretch gap-2 mb-6 md:mb-0
                 w-full max-w-[350px] md:max-w-[310px] sm:max-w-[250px] xs:max-w-[200px]"
        >
          {/* Left vertical line */}
          <div
            className="w-[1px] min-h-[180px] self-stretch"
            style={{
              background:
                'linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)',
            }}
          />

          {/* Content */}
          <div className="flex flex-col gap-2 justify-center items-center flex-1 px-2">
            <button className="p-2 h-11 w-11 rounded-full flex justify-center bg-[#FF9500]">
              <Image
                src={item.logo}
                alt={item.firstTitle}
                height={36}
                width={36}
                className="object-cover rounded-md border"
              />
            </button>

            <div className="w-full rounded-md bg-gradient-to-r from-[#340a0a04] via-[#ffffff57] to-[#fff0]">
              <h4 className="text-center sm:text-lg md:text-2xl font-bold py-2 text-white uppercase">
                {item.firstTitle} <br />
                {item.secondTitle}
              </h4>
            </div>

            <p className="text-base text-white mt-2 text-center">
              {item.paragraph}
            </p>
          </div>

          {/* Right vertical line */}
          <div
            className="w-[1px] min-h-[180px] self-stretch"
            style={{
              background:
                'linear-gradient(to bottom, white 0%, rgba(255,255,255,0) 100%)',
            }}
          />
        </div>
      ))}
    </div>
  );
}
