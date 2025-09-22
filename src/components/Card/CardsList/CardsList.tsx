import type { IAnimal, ILivros, IPessoas } from "../../../interfaces/interfaces";
import Card from "../Card";
import "./CardsList.css";

interface CardsListProps {
    items: (IAnimal | ILivros | IPessoas)[];
}

function CardsList({ items }: CardsListProps) {
  return (
    <ul className="cards-list">
      {items.map((item, index) => (
        <li key={item.id}>
          <Card key={index} content={item} />
        </li>
      ))}
    </ul>
  );
}

export default CardsList;
