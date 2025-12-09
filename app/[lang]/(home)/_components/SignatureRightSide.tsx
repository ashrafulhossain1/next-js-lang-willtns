import Image from 'next/image';

export type ImageKeys = 'img1' | 'img2' | 'img3' | 'img4' | 'img5';

const images: Record<ImageKeys, string> = {
  img1: '/images/home/img-1.png',
  img2: '/images/home/img-2.png',
  img3: '/images/home/img-3.png',
  img4: '/images/home/img-4.png',
  img5: '/images/home/img-5.png',
};
export default function SignatureRightSide() {
  return (
    <div className="flex md:w-[824px] flex-col md:flex-row flex-wrap ">
      {/* right => left */}
      <div className=" w-full md:w-1/2">
        <button className="bg-[#FF9500] rounded-full w-12 h-12 sm:w-20 sm:h-20 md:w-20 md:h-20 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-[45px]">
          1
        </button>
        <h2 className="text-xl md:text-2xl font-bold mt-4">
          <span className=" text-black uppercase">Éditeur PDF</span>{' '}
          <span className="uppercase text-[#FF9500]">intégré</span>
        </h2>
        <p>
          Préparez vos documents directement dans la plateforme. Ajoutez des
          champs de signature, du texte ou des cases à cocher en quelques clics.
        </p>

        {/* Divider */}
        <div
          className="mb-4 sm:mb-6  w-full sm:w-[500px] lg:w-[696px] h-[1px]"
          style={{
            background:
              'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
          }}
        />
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <Image
              src="/images/check-orange.svg"
              height={21}
              width={22}
              alt=""
            />
            Édition PDF en temps réel
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/images/check-orange.svg"
              height={21}
              width={22}
              alt=""
            />
            Positionnement précis des champs
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/images/check-orange.svg"
              height={21}
              width={22}
              alt=""
            />
            Templates réutilisables
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-[500px] aspect-[4/3]">
          <Image
            src={images.img3}
            alt="Electronic Signature Illustration"
            fill
            className="object-contain h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
