import CostSummaryHeading from './CostSummaryHeading';
import CostLine from './CostLine';
import { ArrowRight } from 'lucide-react';

export default function CostSummary() {
  return (
    <div className="max-w-[1300px] mt-10 mb-[110px] mx-auto px-[50px] py-10 bg-linear-to-r from-[#30204D] to-[#533589] text-white rounded-2xl md:rounded-[20px]">
      <div>
        <CostSummaryHeading></CostSummaryHeading>
      </div>
      <div>
        <div className="rounded-md bg-gradient-to-r from-[#340a0a04] via-[#ffffff57] to-[#fff0] pb-2">
          <div>
            <CostLine
              title="Installation VoIP"
              buttonText="90$ CAD"
              titleColor="#fff"
            ></CostLine>
            <div
              className={`lg:mx-0 relative left-2/12 h-px w-2/3 mx-auto`}
              style={{
                background:
                  'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
              }}
            />
            <CostLine
              title="Total frais de départ"
              buttonText="90$ CAD"
            ></CostLine>
          </div>
        </div>

        {/* again cost line */}
        <div>
          <h1 className="text-[45px] text-center font-bold">
            Frais de départ (une fois)
          </h1>
        </div>
        <div className="rounded-md bg-gradient-to-r from-[#340a0a04] via-[#ffffff57] to-[#fff0] pb-2">
          <CostLine
            title="Postes VoIP (1)"
            buttonText="25$ CAD"
            titleColor="#fff"
          ></CostLine>
          <div
            className={`lg:mx-0 relative left-2/12 h-px w-2/3 mx-auto`}
            style={{
              background:
                'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
            }}
          />
          <CostLine
            title="Service E911"
            buttonText="0.95$ CAD"
            titleColor="#fff"
          ></CostLine>
          <div
            className={`lg:mx-0 relative left-2/12 h-px w-2/3 mx-auto`}
            style={{
              background:
                'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
            }}
          />
          <CostLine title="Total mensuel" buttonText="25.95$ CAD"></CostLine>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-3 sm:py-4 md:py-6">
        <button className="bg-[#FF9500] hover:bg-[#dd8204] rounded-full py-2.5 px-5 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95">
          <span className="font-bold text-white text-sm">
            Commander cette configuration
          </span>
          <div className="bg-white rounded-full flex items-center justify-center p-1">
            <ArrowRight size={16} className="text-orange-500" />
          </div>
        </button>
        <p className="mt-4">
          Configuration personnalisée : 1 utilisateur+ 0 options
        </p>
      </div>
    </div>
  );
}
