import Image from 'next/image';
import React from 'react';

export default function AiComplianceSettings() {
  return (
    <div className="w-full p-6 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-4xl  md:rounded-full flex flex-col md:flex-row items-center gap-6 mt-5 sm:mt-10 md:mt-12">
      {/* Logo */}
      <div className="shrink-0">
        <Image
          src="/images/telephonia/settings.svg"
          alt="Settings Logo"
          width={78}
          height={78}
        />
      </div>

      {/* Text */}
      <p className="text-white text-center md:text-left">
        La conformité ne doit pas dépendre de la vigilance humaine. Avec Tchat N
        Sign, chaque échange est surveillé, filtré et archivé selon les plus
        hauts standards de sécurité canadiens — sans alourdir vos opérations.
      </p>
    </div>
  );
}
