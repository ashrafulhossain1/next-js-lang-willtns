import { BsFillFileEarmarkPdfFill } from 'react-icons/bs';

export default function SignatureLeftSide() {
  return (
    <div className="w-2/5 py-10">
      <h1 className="font-bold text-3xl md:text-4xl lg::text-5xl">
        <span className="text-black">Signature électronique </span> <br />
        <span className="text-[#FF9500]">fluide et rapide</span>
      </h1>
      <p className="uppercase text-base font-bold sm:text-lg">
        Faites signer vos documents en 15 secondes au lieu de 20 minutes
      </p>
      <div>
        <button className="bg-[#FF9500] rounded-full flex items-center gap-3 p-3 pl-5 mt-4 text-white font-semibold hover:bg-[#e08500]">
          <span>PDF Editor</span>

          <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
            <BsFillFileEarmarkPdfFill size={16} className="text-black" />
          </span>
        </button>
      </div>
    </div>
  );
}
