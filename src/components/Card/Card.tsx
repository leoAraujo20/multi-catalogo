import type { IAnimal, ILivros, IPessoas } from "../../interfaces/interfaces";
import "./Card.css";
import { useFavoriteContext } from "../../context/favoriteContext";

interface CardProps {
  content: IAnimal | ILivros | IPessoas;
}

function Card({ content }: CardProps) {
  const { toggleFavorite, isFavorite } = useFavoriteContext();
  const imageUrl =
    "imagem" in content
      ? content.imagem
      : "capa" in content
      ? content.capa
      : content.foto;

  const altText = "nome" in content ? content.nome : content.titulo;

  return (
    <figure className="card">
      <img src={imageUrl} alt={altText} />
      <div className="card-content">
        {"especie" in content && (
          <>
            <h3>{content.nome}</h3>
            <p>Espécie: {content.especie}</p>
          </>
        )}

        {"autor" in content && (
          <>
            <h3>{content.titulo}</h3>
            <p>Autor: {content.autor}</p>
            <p>Ano: {content.ano}</p>
          </>
        )}

        {"area" in content && (
          <>
            <h3>{content.nome}</h3>
            <p>Área: {content.area}</p>
            <p>Nascimento: {content.nascimento}</p>
          </>
        )}
        <button onClick={() => toggleFavorite(content.id)}>
          {isFavorite(content.id) ? (
            <span>❤️</span>
          ) : (
            <span >🤍</span>
          )}
        </button>
      </div>
    </figure>
  );
}

export default Card;
