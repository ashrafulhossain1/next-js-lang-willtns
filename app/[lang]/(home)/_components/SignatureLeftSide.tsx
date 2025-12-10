import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';

type Props = {
  onNext: () => void;
  onPrev: () => void;
};

export default function SignatureLeftSide({ onNext, onPrev }: Props) {
  return (
    <div className="w-full flex-1 py-4 xs:py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 px-0 xs:px-1 sm:px-2 md:px-3 lg:px-4 mb-20 md:mt-4 xl:px-6 2xl:px-8">
      <h1 className="font-bold text-xl uppercase xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl 2xl:text-[56px] leading-[1.1] sm:leading-[1.15] md:leading-[1.2]">
        <span className="text-black block sm:inline">
          Signature électronique{' '}
        </span>
        <br className="hidden sm:block" />
        <span className="text-[#FF9500] block sm:inline">fluide et rapide</span>
      </h1>
      <p className="mt-2.5 xs:mt-3 sm:mt-3.5 md:mt-4 lg:mt-5 text-xs xs:text-sm sm:text-base md:text-lg font-bold uppercase leading-[1.4] sm:leading-[1.5] max-w-full xs:max-w-[95%] sm:max-w-[90%] md:max-w-[88%] lg:max-w-[85%] xl:max-w-[80%]">
        Faites signer vos documents en 15 secondes au lieu de 20 minutes
      </p>
      <div className="flex flex-wrap gap-2.5 xs:gap-3 sm:gap-3.5 md:gap-4 items-center mt-5 xs:mt-6 sm:mt-7 md:mt-8 lg:mt-9 xl:mt-10">
        <button className="bg-[#FF9500] rounded-full flex items-center gap-2 xs:gap-2.5 sm:gap-3 px-3.5 xs:px-4 sm:px-4.5 md:px-5 lg:px-6 py-2 xs:py-2.5 sm:py-3 md:py-3.5 text-white text-xs xs:text-sm sm:text-base md:text-lg font-semibold hover:bg-[#e08500] transition-all duration-200 active:scale-95">
          <span>PDF Editor</span>
          <span className="bg-white w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full flex-shrink-0">
            <BsFillFileEarmarkPdfFill className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-black" />
          </span>
        </button>

        <button
          onClick={onPrev}
          className="bg-[#FF9500] text-white h-11 w-11 xs:h-12 xs:w-12 sm:h-[52px] sm:w-[52px] md:h-[54px] md:w-[54px] rounded-full flex items-center justify-center font-semibold hover:bg-[#e08500] transition-all duration-200 active:scale-95 flex-shrink-0"
          aria-label="Previous card"
        >
          <GoArrowLeft className="w-4 h-4 xs:w-[18px] xs:h-[18px] sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={onNext}
          className="bg-[#FF9500] text-white h-11 w-11 xs:h-12 xs:w-12 sm:h-[52px] sm:w-[52px] md:h-[54px] md:w-[54px] rounded-full flex items-center justify-center font-semibold hover:bg-[#e08500] transition-all duration-200 active:scale-95 flex-shrink-0"
          aria-label="Next card"
        >
          <GoArrowRight className="w-4 h-4 xs:w-[18px] xs:h-[18px] sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}
