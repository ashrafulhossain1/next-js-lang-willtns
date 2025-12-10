import { getTranslations } from '@/lib/translations';
import Hero from './_components/Hero';
import Conversion1 from './_components/Conversion1';
import Conversion2 from './_components/Conversion2';
import ElectronicSignature from './_components/ElectronicSignature';
import AdminPanel from './_components/AdminPanel';
import Communication from './_components/Communication';
import ElectronicSignatureCarousel from './_components/ElectronicSignatureCarousel';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'en' | 'bn';
  const t = getTranslations(lang);

  return (
    <div className="bg-white">
      <div className="">
        <Hero></Hero>
        <Conversion1></Conversion1>
        <Conversion2></Conversion2>
        <ElectronicSignature></ElectronicSignature>
        <AdminPanel></AdminPanel>
        <Communication></Communication>
      </div>
    </div>
  );
}
