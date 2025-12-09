import Image from 'next/image';

export default function ConversionCard() {
  return (
    <div className="w-full md:w-[420px]">
      <div
        className="bg-white rounded-2xl p-6 w-full mx-auto relative"
        style={{ boxShadow: '0 4px 25px rgba(0,0,0,0.15)' }}
      >
        <h3 className="text-[18px] font-bold uppercase mb-3">
          Interface de conversation centralisée
        </h3>
        <p className="text-gray-700 text-[14px] leading-[22px] mb-4">
          Toutes vos conversations client dans une seule interface intuitive.
        </p>

        <ul className="space-y-3 text-[14px] text-gray-800">
          <li className="flex items-start gap-3">
            <Image
              src="/images/check-orange.svg"
              width={18}
              height={18}
              alt=""
            />
            Historique complet par client
          </li>

          <li className="flex items-start gap-3">
            <Image
              src="/images/check-orange.svg"
              width={18}
              height={18}
              alt=""
            />
            Tous les canaux visibles
          </li>

          <li className="flex items-start gap-3">
            <Image
              src="/images/check-orange.svg"
              width={18}
              height={18}
              alt=""
            />
            Interface mobile et desktop
          </li>
        </ul>
      </div>

      {/* Vertical Line + Icon */}
      <div className="hidden  md:flex absolute top-[300px] flex-col items-center left-0">
        <div className="w-2 h-2 bg-gray-300 rounded-full mb-4" />
        <div className="border-l-[2.5px] border-dashed border-gray-300 h-60" />

        <div className="relative -top-4">
          <div className="bg-[#FF9500] rounded-full w-[85px] h-[85px] flex items-center justify-center shadow-xl">
            <Image src="/images/pen.svg" width={45} height={45} alt="pen" />
          </div>
        </div>

        <div className="-mt-3 border-2 border-dashed border-gray-300 h-60" />
        <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
