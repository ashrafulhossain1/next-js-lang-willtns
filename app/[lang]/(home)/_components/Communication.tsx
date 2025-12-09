import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Communication() {
  return (
    <div className="bg-[#F6F5F9] py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="relative py-6 max-w-[1300px] mx-auto overflow-hidden px-4 sm:px-6 lg:px-10">
        {/* Corner Vectors – Responsive size */}
        <Image
          src="/images/home/vector-1.svg"
          alt="Top Left Vector"
          width={60}
          height={60}
          className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 lg:top-5 lg:left-5"
        />
        <Image
          src="/images/home/vector-3.svg"
          alt="Top Right Vector"
          width={60}
          height={60}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 lg:top-5 lg:right-5"
        />
        <Image
          src="/images/home/vector-2.svg"
          alt="Bottom Left Vector"
          width={60}
          height={60}
          className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4 lg:bottom-5 lg:left-5"
        />
        <Image
          src="/images/home/vector-1.svg"
          alt="Bottom Right Vector"
          width={60}
          height={60}
          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 lg:bottom-5 lg:right-5"
        />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Title */}
          <h3
            className="
            text-black font-bold
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-[44px]
            xl:text-[46px]
            leading-snug
          "
          >
            Prêt à centraliser vos
            <span className="text-[#FF9500]"> communications ?</span>
          </h3>

          {/* Description */}
          <p
            className="
            mt-3 text-[#FF9500] font-medium
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            max-w-[90%]
            sm:max-w-[80%]
            md:max-w-[70%]
          "
          >
            Découvrez comment la plateforme omnichannel peut transformer votre
            quotidien et celui de vos clients.
          </p>

          {/* Buttons */}
          <div
            className="
            flex flex-col
            sm:flex-row
            gap-3 sm:gap-4 md:gap-5
            justify-center mt-6 md:mt-8
          "
          >
            <button
              className="
              bg-orange-500 hover:bg-orange-600
              rounded-full
              py-2.5 sm:py-3
              px-6 sm:px-8
              flex items-center justify-center gap-2.5
              transition-all duration-300
              hover:scale-105 active:scale-95
            "
            >
              <span
                className="
                text-white font-bold
                text-sm sm:text-base md:text-lg
              "
              >
                Essai gratuit
              </span>
              <div className="bg-white rounded-full flex items-center justify-center p-1.5">
                <ArrowRight size={16} className="text-orange-500" />
              </div>
            </button>

            <button
              className="
              bg-black hover:bg-black/90
              rounded-full
              py-2.5 sm:py-3
              px-6 sm:px-8
              flex items-center justify-center gap-2.5
              transition-all duration-300
              hover:scale-105 active:scale-95
            "
            >
              <span
                className="
                text-white font-bold
                text-sm sm:text-base md:text-lg
              "
              >
                Essai gratuit
              </span>
              <div className="bg-white rounded-full flex items-center justify-center p-1.5">
                <ArrowRight size={16} className="text-orange-500" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
