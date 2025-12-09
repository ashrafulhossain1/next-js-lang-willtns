import SectionTitle from '@/app/components/reuseable/SectionTitle';
import Subtitle from '@/app/components/reuseable/Subtitle';
import React from 'react';
import TchatTable from './TchatTable';

export default function TchatNSign() {
  return (
    <div className="max-w-[1300px] mx-auto py-20">
      {/* heading */}
      <div className="w-11/12 mx-auto mb-10">
        <h1 className="text-center uppercase">
          <SectionTitle
            text="Tchat N Sign transforme vos messageries courantes en canaux"
            textColor="text-black"
          ></SectionTitle>{' '}
          <SectionTitle text="professionnels conformes."></SectionTitle>
        </h1>
        <h4 className="text-center uppercase mt-4">
          <Subtitle text="Comparatif des canaux de communication" />
        </h4>

        <div className="text-xs md:text-base   lg:text-lg text-center space-y-2">
          <h4>
            Messageries personnelles (SMS, Messenger et bientôt WhatsApp) vs
            environnement conforme Tchat N Sign
          </h4>
          <h4>
            Les messageries instantanées font désormais partie des habitudes de
            vos clients. Plutôt que d'imposer un changement, Tchat N Sign
            intègre ces canaux et les encadre dans un environnement conforme à
            la Loi 25, au Code de déontologie CSF/IQPF et aux exigences OCRI.
          </h4>
          <h4>
            Les échanges sont ainsi centralisés, archivés et protégés, tout en
            préservant la simplicité d'un message texte.
          </h4>
        </div>
      </div>
      <TchatTable></TchatTable>
    </div>
  );
}
