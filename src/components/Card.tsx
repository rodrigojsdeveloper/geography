import { AiOutlineHeart } from "react-icons/ai";

interface ICardProps {
  country: string;
  continent: string;
  src: string;
}

interface ICard {
  card: ICardProps;
}

const Card = ({ card }: ICard) => {
  return (
    <div className="w-full max-w-406 h-96 flex bg-grey-1 border border-solid border-grey-3 mb-4 mr-4">
      <img
        src={card.src}
        alt={card.country}
        className="w-full max-w-110 h-74 m-auto mx-2.5"
      />

      <div className="w-full flex justify-between bg-grey-2 p-2">
        <div className="w-full flex flex-col justify-center">
          <h2 className="font-bold text-base mb-2">{card.country}</h2>

          <p className="font-bold text-xs">{card.continent}</p>
        </div>

        <div className="h-fit cursor-pointer p-1.5 hover:bg-grey-3 hover:rounded-full">
          <AiOutlineHeart size={24} />
        </div>
      </div>
    </div>
  );
};

export { Card };
