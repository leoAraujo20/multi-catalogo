import CardsList from "../../components/Card/CardsList/CardsList";
import mocks from "../../mocks/mocks.json";

function Books() {
    return (
        <>
            <h2>Livros</h2>
            <CardsList items={mocks.livros} />
        </>
    );
}

export default Books;