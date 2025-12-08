import FaqData from './FaqData';

export default function FAQ() {
  return (
    <div className="py-10 bg-linear-to-r from-[#30204D] to-[#533589]">
      <div className="max-w-[1300px] mb-[110px] mx-auto px-[50px] ">
        <div>
          <h1 className=" font-bold text-xl md:text-3xl lg:text-[45px] mb-4 uppercase flex justify-center items-center text-center text-black">
            <span className="text-white">Questions fréquentes sur la</span>
            <span className="text-[#FF9500]">téléphonie VoIP</span>
          </h1>
          <p className="font-medium text-white text-center">
            Tout ce que vous devez savoir sur notre solution téléphonique pour
            conseillers{' '}
          </p>
        </div>
        <div className="py-10 sm:my-16 md:my-20">
          <FaqData></FaqData>
        </div>
      </div>
    </div>
  );
}
