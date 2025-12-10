// components/SignatureCard.tsx
import Image from 'next/image';

type Props = {
  number: string;
  titleBlack: string;
  titleOrange: string;
  desc: string;
  features: string[];
  image: string;
};

export default function SignatureCard({
  number,
  titleBlack,
  titleOrange,
  desc,
  features,
  image,
}: Props) {
  return (
    <div className="w-full md:w-[824px] border bg-white border-gray-300 rounded-2xl md:rounded-3xl flex flex-col md:flex-row justify-between overflow-hidden shadow-lg">
      {/* Left Text */}
      <div className="w-full md:max-w-[352px] py-8 pl-8 pr-6">
        <div className="bg-[#FF9500] rounded-full w-12 h-12 md:w-[65px] md:h-[65px] flex justify-center items-center text-white text-3xl md:text-4xl font-bold">
          {number}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mt-6">
          <span className="text-black uppercase">{titleBlack}</span>{' '}
          <span className="uppercase text-[#FF9500]">{titleOrange}</span>
        </h2>
        <p className="mt-2 text-lg text-gray-700">{desc}</p>

        <div className="w-full h-[1.5px] bg-gradient-to-r from-black/80 to-transparent" />

        <ul className="space-y-4">
          {features.map((feat, i) => (
            <li key={i} className="flex items-center gap-3">
              <Image
                src="/images/check-orange.svg"
                width={22}
                height={21}
                alt="check"
              />
              <span className="text-gray-800">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <div className="shrink-0">
        <Image
          src={image}
          alt="Feature illustration"
          width={386}
          height={420}
          className="object-cover w-full md:w-[386px] h-full rounded-tr-3xl rounded-br-3xl"
          priority
        />
      </div>
    </div>
  );
}
