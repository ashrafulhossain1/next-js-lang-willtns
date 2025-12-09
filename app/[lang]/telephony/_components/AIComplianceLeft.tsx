import Subtitle from '@/app/components/reuseable/Subtitle';
import React from 'react';

export default function AIComplianceLeft() {
  return (
    <div className="flex flex-col text-white w-full md:w-1/2 p-2 md:p-4 mt-5 sm:mt-10 md:mt-20 lg:mt-32">
      <h2>
        <Subtitle text="Prévention active des fuites de données"></Subtitle>
      </h2>
      <p>
        Les échanges numériques contiennent souvent des données sensibles :
        numéros d'assurance sociale, relevés, documents confidentiels. Tchat N
        Sign intègre une intelligence artificielle qui agit comme un garde-fou
        automatique, en identifiant et neutralisant les risques avant qu'ils ne
        compromettent votre conformité.
      </p>
      <div
        className="my-4 sm:my-6  w-full max-w-[600px] h-[1px] mx-auto lg:mx-0"
        style={{
          background:
            'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
        }}
      />

      <p>
        Notre IA ne remplace pas vos équipes — elle les protège, en appliquant
        de manière systématique les bonnes pratiques exigées par la Loi 25 et
        les organismes de réglementation canadiens.
      </p>
    </div>
  );
}
