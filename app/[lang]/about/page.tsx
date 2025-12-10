import Hero from './_components/Hero';
import Functional from './_components/Functional';
import Assistant from './_components/Assistant';
import Modules from './_components/Modules';
import Installation from './_components/Installation';
import Calculator from './_components/Calculator';
import CostSummary from './_components/CostSummary';
import FAQ from './_components/FAQ';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as 'en' | 'bn';

  return (
    <div className="bg-white">
      <Hero></Hero>
      <Functional></Functional>
      <Assistant></Assistant>
      <Modules></Modules>
      <Installation></Installation>
      <Calculator></Calculator>
      <CostSummary></CostSummary>
      <FAQ></FAQ>
    </div>
  );
}
