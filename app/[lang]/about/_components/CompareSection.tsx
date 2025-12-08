import { CiPhone, CiSearch, CiCircleRemove, CiAlarmOn } from 'react-icons/ci';

export default function CompareSection() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 w-full max-w-5xl mx-auto mt-10 text-black">
      {/* Left Box */}
      <div className="w-full md:w-1/2 bg-white rounded-2xl border border-blue-200 p-6 shadow-sm relative mb-10 md:mb-0">
        <h3 className="flex items-center justify-center gap-2 font-bold mb-6 text-sm md:text-base lg:text-lg">
          <button className="h-10 w-10 bg-[#FF9500] flex items-center justify-center rounded-full">
            <CiPhone className="text-white" size={25} />
          </button>
          <span className="text-xl md:text-3xl">VOIP TRADITIONNEL</span>
        </h3>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 relative">
          {/* Vertical line Left */}
          <div className="absolute top-10 left-5 w-1 h-[calc(100%-2.5rem)] bg-orange-200"></div>

          {/* Grid items */}
          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold">
            <button className="h-8 w-8 bg-[#FF9500] flex items-center justify-center rounded-full">
              <CiPhone className="text-white font-bold" size={20} />
            </button>
            APPEL
          </div>

          <div className="flex items-center gap-3  z-10  md:text-base lg:text-xl font-semibold">
            <button className="h-10 w-10 bg-[#FF9500] flex items-center justify-center rounded-full">
              <CiPhone className="text-white" size={25} />
            </button>
            ENREGISTRÉ QUELQUE PART
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold">
            <button className="h-8 w-8 bg-[#FF9500] flex items-center justify-center rounded-full">
              <CiCircleRemove className="text-white" size={20} />
            </button>
            PERDU DANS LE SYSTÈME
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold text-red-500">
            <button className="h-8 w-8 bg-red-500 flex items-center justify-center rounded-full">
              <CiCircleRemove className="text-white" size={20} />
            </button>
            AUCUN LIEN AVEC LE CRM
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold text-red-500">
            <button className="h-8 w-8 bg-red-500 flex items-center justify-center rounded-full">
              <CiSearch className="text-white" size={20} />
            </button>
            RECHERCHE MANUELLE FASTIDIEUSE
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold text-red-500">
            <button className="h-8 w-8 bg-red-500 flex items-center justify-center rounded-full">
              <CiAlarmOn className="text-white" size={20} />
            </button>
            RECHERCHE MANUELLE FASTIDIEUSE
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="w-full md:w-1/2 bg-white rounded-2xl border border-blue-200 p-6 shadow-sm relative">
        <h3 className="flex items-center justify-center gap-2 font-bold mb-6 text-sm md:text-base lg:text-lg">
          <button className="h-8 w-8 bg-[#FF9500] flex items-center justify-center rounded-full">
            <CiPhone className="text-white" size={20} />
          </button>
          <span className="text-2xl md:text-3xl lg:text-4xl">
            TÉLÉPHONIE TCHAT N SIGN
          </span>
        </h3>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 relative">
          {/* Vertical line Right */}
          <div className="absolute top-10 left-5 w-1 h-[calc(100%-2.5rem)] bg-green-200"></div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold">
            <button className="h-8 w-8 bg-[#FF9500] flex items-center justify-center rounded-full">
              <CiPhone className="text-white" size={20} />
            </button>
            APPEL
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold">
            <button className="h-8 w-8 bg-[#FF9500] flex items-center justify-center rounded-full">
              <CiAlarmOn className="text-white" size={20} />
            </button>
            TCHAT N SIGN
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold">
            <button className="h-8 w-8 bg-[#FF9500] flex items-center justify-center rounded-full">
              <CiCircleRemove className="text-white" size={20} />
            </button>
            ARCHIVÉ
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold text-green-500">
            <button className="h-8 w-8 bg-green-500 flex items-center justify-center rounded-full">
              <CiCircleRemove className="text-white" size={20} />
            </button>
            CONFORME
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold text-green-500">
            <button className="h-8 w-8 bg-green-500 flex items-center justify-center rounded-full">
              <CiPhone className="text-white" size={20} />
            </button>
            SERVEURS CANADIENS
          </div>

          <div className="flex items-center gap-3 relative z-10 text-[14px] md:text-base lg:text-xl font-semibold text-green-500">
            <button className="h-8 w-8 bg-green-500 flex items-center justify-center rounded-full">
              <CiSearch className="text-white" size={20} />
            </button>
            LIEN AVEC LE CRM
          </div>
        </div>
      </div>
    </div>
  );
}
