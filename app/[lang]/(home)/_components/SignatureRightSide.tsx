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
    <div
      className="flex flex-col md:flex-row flex-wrap"
      style={{
        boxShadow:
          'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;',
      }}
    >
      {/* Images container */}
      <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
        {Object.values(images).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Illustration ${index + 1}`}
            width={150}
            height={150}
            className="object-contain"
          />
        ))}
      </div>

      {/* Text content */}
      <div className="py-5 px-7 w-full md:w-1/2">
        <button className="bg-[#FF9500] rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex justify-center items-center text-white text-2xl md:text-3xl lg:text-[45px]">
          1
        </button>
        <h2 className="text-xl md:text-2xl font-bold mt-4">
          <span className="text-black uppercase">Éditeur PDF</span>{' '}
          <span className="uppercase text-[#FF9500]">intégré</span>
        </h2>
        <p>
          Préparez vos documents directement dans la plateforme. Ajoutez des
          champs de signature, du texte ou des cases à cocher en quelques clics.
        </p>

        {/* Divider */}
        <div
          className="mb-4 sm:mb-6 lg:mb-10 w-full sm:w-[500px] lg:w-[696px] h-[1px]"
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
    </div>
  );
}
