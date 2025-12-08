import AssistantCard from './AssistantCard';
import { assistantCards } from './actions/assistantData';

export default function Assistant() {
  return (
    <div className="max-w-[1300px] mx-auto pb-20">
      <div className="mt-8 sm:mt-16 md:mt-[100px]">
        <div className="flex md:justify-between flex-wrap ">
          <h1 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[45px] leading-tight uppercase font-bold text-black">
            Assistant intelligent
            <br className="hidden" />{' '}
            <span className="text-[#FF9500]">sécurisé</span>
          </h1>
          <span className="text-lg md:text-end text-black">
            Bientôt disponible
          </span>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3 md:mt-6 lg:mt-10 ">
            {assistantCards.map((card) => (
              <AssistantCard
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
