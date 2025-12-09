'use client';
import { usePathname } from 'next/navigation';
import Hero from './_components/Hero';
import TchatNSign from './_components/TchatNSign';

export default function Telephony() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Hero></Hero>
      <TchatNSign></TchatNSign>
    </div>
  );
}
