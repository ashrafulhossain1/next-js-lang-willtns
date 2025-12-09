'use client';

import Image from 'next/image';
import ConversionCard from './ConversionCard1';

const Conversion1 = () => {
  return (
    <section className="relative w-full bg-white md:pb-20 py-10 text-black px-4 md:p-8">
      <div className="relative max-w-[1300px] mx-auto px-4 md:px-0 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12">
        {/* LEFT CARD */}
        <ConversionCard></ConversionCard>

        {/* RIGHT PHONE + CHAT */}
        <div className="relative w-full md:w-auto flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/images/apple.png"
              alt="phone"
              width={380}
              height={760}
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
            />

            {/* CHAT BUBBLE */}
            <div className="absolute top-[12%] right-[10%] sm:right-[12%] md:right-[8%]">
              <div className="relative">
                <div className="bg-[#5FB544] text-white rounded-xl px-4 py-2 text-[11px] sm:text-[13px] w-[160px] sm:w-[210px] leading-[17px] shadow">
                  Allô ! Je tiens à ce que j’ai rassemblé tous les documents
                  qu’il faut pour notre prochaine rencontre.
                </div>
                <div className="absolute left-5 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-8 border-l-transparent border-r-transparent border-t-[#5FB544]" />
              </div>

              <span className="text-[10px] sm:text-[11px] ml-4 mt-1 block text-green-800 opacity-80">
                – Alphonse Clerc
              </span>
            </div>
          </div>
          {/* BADGE */}
          <div
            className="absolute sm:left-auto -bottom-36  md:bottom-5 md:right-[370px] lg:right-[400px] bg-white rounded-l-2xl px-10 py-10"
            style={{ boxShadow: '0 4px 25px rgba(0,0,0,0.15)' }}
          >
            <h1 className="font-bold text-[18px] sm:text-[20px] mr-36">
              Tchat Omnichannel
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conversion1;
