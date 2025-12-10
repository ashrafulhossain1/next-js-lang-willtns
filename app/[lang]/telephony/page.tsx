'use client';
import { usePathname } from 'next/navigation';
import Hero from './_components/Hero';
import TchatNSign from './_components/TchatNSign';
import TChatCovered from './_components/TChatCovered';
import AIComplianceSection from './_components/AIComplianceSection';
import Responsibility from './_components/Responsibility';
import AuditScope from './_components/AuditScope';

export default function Telephony() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <Hero></Hero>
      <AuditScope></AuditScope>
      <TChatCovered></TChatCovered>
      <TchatNSign></TchatNSign>
      <AIComplianceSection></AIComplianceSection>
      <Responsibility></Responsibility>
    </div>
  );
}
