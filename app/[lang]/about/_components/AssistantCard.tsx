import Image from 'next/image';

export type AssistantCardProps = {
  imageSrc: string;
  title: string;
};

export default function AssistantCard({ imageSrc, title }: AssistantCardProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 bg-white rounded-2xl md:rounded-3xl lg:rounded-4xl shadow-md border border-gray-200">
      <Image src={imageSrc} alt="assistant image" height={88} width={88} />
      <h2 className="text-lg font-bold mt-4 mb-2 text-black uppercase">
        {title}
      </h2>
    </div>
  );
}
