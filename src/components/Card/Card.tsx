import type { IAnimal } from "../../interfaces/interfaces";
import "./Card.css";

interface CardProps {
  content: IAnimal;
  key: number;
}

function Card({ content }: CardProps) {
  return (
    <figure className="card">
      <img src={content.imagem} alt={content.nome} />
      <div className="card-content">
        <h3>{content.nome}</h3>
        <p>Espécie: {content.especie}</p>
      </div>
    </figure>
  );
}

export default Card;
