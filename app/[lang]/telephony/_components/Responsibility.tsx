import SectionTitle from '@/app/components/reuseable/SectionTitle';
import Image from 'next/image';

export default function Responsibility() {
  return (
    <div className="py-8 sm:py-10 md:py-16 bg-[#F6F5F9]">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-2/3">
          <h3 className="uppercase text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug">
            <SectionTitle
              textColor="text-black"
              text="Responsabilité et portée"
            />
            <br />
            <SectionTitle text="de conformité." />
          </h3>
        </div>

        {/* Left paragraph and image */}
        <div className="flex flex-col md:flex-row items-start w-full gap-6 md:gap-12 mt-5 md:mt-8">
          {/* Text */}
          <div className="flex-1 flex flex-col text-black space-y-4 md:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            <p>
              Les informations présentées sur cette page visent à faciliter la
              compréhension des exigences légales et déontologiques applicables
              aux professionnels des services financiers. Elles ne constituent
              ni un avis juridique ni une interprétation officielle des lois ou
              règlements mentionnés.
            </p>
            <p>
              Tchat N Sign met en œuvre des mesures technologiques destinées à
              aider les cabinets et les professionnels à respecter leurs
              obligations en matière de sécurité et de confidentialité.
              Toutefois, la conformité réglementaire demeure la responsabilité
              de chaque cabinet ou professionnel qui doit vérifier que ses
              politiques internes et ses pratiques satisfont aux exigences de la
              Loi 25, du Code de déontologie de la CSF et des règles de l'OCRI
              ainsi qu'aux lois fédérales et provinciales applicables.
            </p>
            <p>
              Tchat N Sign agit comme fournisseur technologique et non comme
              conseiller juridique. Les exemples et références légales fournis
              illustrent les liens entre nos fonctionnalités et les cadres
              réglementaires. Chaque organisation doit effectuer ses propres
              vérifications et obtenir des conseils juridiques indépendants au
              besoin.
            </p>
          </div>

          {/* Responsive Image */}
          <div className="relative w-full sm:w-3/4 md:w-1/2 lg:w-2/5 h-64 sm:h-80 md:h-[352px] lg:h-[416px] flex-shrink-0">
            <Image
              src="/images/telephonia/responsibilities.png"
              alt="Illustration de responsabilité et conformité"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Responsibilities Footer */}
        <div className="relative w-full p-4 md:p-6 border-[0.5px] border-purple-800 rounded-4xl md:rounded-full flex flex-col md:flex-row items-center gap-6 mt-8 sm:mt-10 md:mt-12">
          <span className="absolute inset-0 rounded-4xl md:rounded-full animate-snake-border pointer-events-none"></span>
          <div className="shrink-0 relative z-10">
            <Image
              src="/images/telephonia/written-ok.svg"
              alt="Logo de validation"
              width={78}
              height={78}
              className="w-16 h-16 md:w-20 md:h-20 lg:w-[78px] lg:h-[78px]"
            />
          </div>

          {/* Text */}
          <p className="text-black text-center md:text-left relative z-10 text-sm md:text-base lg:text-lg px-2 md:px-0">
            En résumé: Tchat N Sign est un facilitateur de conformité. Chaque
            cabinet demeure responsable de sa conformité réglementaire.
          </p>
        </div>
      </div>
    </div>
  );
}
