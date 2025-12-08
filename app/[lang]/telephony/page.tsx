'use client';
import { usePathname } from 'next/navigation';

export default function Telephony() {
  const pathname = usePathname();
  console.log(pathname);
  return <div>this is Telephony us page</div>;
}
