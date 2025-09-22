import type { IAnimal } from '../../interfaces/animal';
import "./Card.css";

interface CardProps {
    content: IAnimal;
    key: number;
}

function Card({ content }: CardProps) {
    return (
        <article className="card">
            <h3>{content.nome}</h3>
            <p>Espécie: {content.especie}</p>
            <img src={content.imagem} alt={content.nome} />
        </article>
    )
}

export default Card;