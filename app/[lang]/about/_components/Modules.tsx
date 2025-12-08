import { cards } from './actions/modelsData';
import ModelCards from './ModelCards';

export default function Modules() {
  return (
    <div className="py-16 bg-gradient-to-r from-[#30204D] to-[#533589] text-black">
      <h1 className="text-3xl font-bold text-center mb-10 uppercase font-bold">
        <span className="text-white">Modules</span>{' '}
        <span className="text-[#FF9500]">complémentaires</span>
      </h1>

      <div className="w-full max-w-[1300px] flex items-center justify-center mx-auto ">
        {/* Cards Row */}
        <div className="flex justify-center items-center mx-auto flex-wrap">
          {cards.map((card) => (
            <div
              key={card.id}
              className="md:w-[420px] w-full flex gap-4 justify-center items-center flex-col "
            >
              <ModelCards data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
