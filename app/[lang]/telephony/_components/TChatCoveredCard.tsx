'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export type TChatCardData = {
  image: string;
  title1: string;
  title2: string;
  description: string;
};

type TChatCoveredCardProps = {
  data: TChatCardData;
};

export default function TChatCoveredCard({ data }: TChatCoveredCardProps) {
  const { image, title1, title2, description } = data;

  return (
    <motion.div
      initial={{ rotate: 0, scale: 1 }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="
        lg:w-[420px] p-6 rounded-2xl
        flex flex-col items-start gap-3
        bg-transparent
        hover:bg-[linear-gradient(135deg,rgba(139,136,241,0.28),rgba(255,166,0,0.32))]
        cursor-pointer
      "
    >
      {/* Image */}
      <div className="relative w-[90px] h-[90px] shrink-0">
        <Image src={image} alt="icon" fill className="object-contain" />
      </div>

      <h5 className="text-white text-lg md:text-xl lg:text-2xl">{title1}</h5>

      <h5 className="text-[#FF9500] text-lg md:text-xl lg:text-2xl">
        {title2}
      </h5>

      <p className="text-base md:text-lg text-white/80">{description}</p>
    </motion.div>
  );
}
