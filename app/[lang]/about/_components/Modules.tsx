import { cards } from './actions/modelsData';
import ModelCards from './ModelCards';

export default function Modules() {
  return (
    <div className="py-16 bg-gray-50 text-black">
      <h1 className="text-3xl font-bold text-center mb-10">
        Modules complémentaires
      </h1>

      {/* First row: first 3 cards */}
      <div className="grid grid-cols-1 sm:grid- md:grid-cols-3 justify-center items-center gap-6 mb-6 max-w-[1300px] mx-auto">
        {cards.slice(0, 3).map((card) => (
          <ModelCards key={card.id} data={card} />
        ))}
      </div>

      {/* Second row: next 2 cards */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {cards.slice(3, 5).map((card) => (
          <ModelCards key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
}
