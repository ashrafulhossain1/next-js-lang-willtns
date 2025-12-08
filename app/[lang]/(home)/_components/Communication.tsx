import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Communication() {
  return (
    <div className="bg-[#F6F5F9] py-10">
      <div className="relative py-6  max-w-[1300px] mx-auto overflow-hidden">
        {/* Corner Vectors */}
        <Image
          src="/images/home/vector-1.svg"
          alt="Top Left Vector"
          width={90}
          height={90}
          className="absolute top-0 left-0"
        />
        <Image
          src="/images/home/vector-3.svg"
          alt="Top Right Vector"
          width={90}
          height={90}
          className="absolute top-0 right-0"
        />
        <Image
          src="/images/home/vector-2.svg"
          alt="Bottom Left Vector"
          width={90}
          height={90}
          className="absolute bottom-0 left-0"
        />
        <Image
          src="/images/home/vector-1.svg"
          alt="Bottom Right Vector"
          width={90}
          height={90}
          className="absolute bottom-0 right-0"
        />

        {/* Center Content */}
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="flex justify-center items-center flex-col text-center">
            <h3 className="text-black text-3xl font-bold md:text-[45px]">
              Prêt à centraliser vos
              <span className="text-[#FF9500]"> communications ?</span>
            </h3>
            <p className="text-lg mt-3 w-10/12 text-center text-[#FF9500]">
              Découvrez comment la plateforme omnichannel peut transformer votre
              quotidien et celui de vos clients.
            </p>
          </div>

          <div className="flex gap-2 md:gap-4 justify-center mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 rounded-full py-2.5 px-5 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="font-bold text-white text-sm">
                Essai gratuit
              </span>
              <div className="bg-white rounded-full flex items-center justify-center p-1">
                <ArrowRight size={16} className="text-orange-500" />
              </div>
            </button>

            <button className="bg-[#000000e3] hover:bg-[#000000] rounded-full py-2.5 px-5 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="font-bold text-white text-sm">
                Essai gratuit
              </span>
              <div className="bg-white rounded-full flex items-center justify-center p-1">
                <ArrowRight size={16} className="text-orange-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
