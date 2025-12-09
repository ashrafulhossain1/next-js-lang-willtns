interface SectionTitleProps {
  text: string;
  textColor?: string;
}

export default function SectionTitle({
  text,
  textColor = 'text-[#FF9500]',
}: SectionTitleProps) {
  return (
    <span
      className={`text-xl sm:text-3xl md:text-4xl md:text-[45px] font-bold ${textColor}`}
    >
      {text}
    </span>
  );
}
