interface SubtitleProps {
  text: string;
  textColor?: string;
  textSize?: string;
}

export default function Subtitle({
  text,
  textColor = 'text-[#FF9500]',
  textSize = 'text-lg',
}: SubtitleProps) {
  return (
    <span
      className={`font-bold text-sm sm:text-base  lg:${textSize} ${textColor}`}
    >
      {text}
    </span>
  );
}
