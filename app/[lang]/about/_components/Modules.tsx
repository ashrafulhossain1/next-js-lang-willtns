import { cards } from './actions/modelsData';
import ModelCards from './ModelCards';

export default function Modules() {
  console.log(cards);
  return (
    <div className="py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
      <div className="flex gap-6 justify-center">
        {cards.map((card) => (
          <ModelCards key={card.id} data={card}></ModelCards>
        ))}
      </div>
    </div>
  );
}
