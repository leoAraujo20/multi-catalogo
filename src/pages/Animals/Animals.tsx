import CardsList from "../../components/Card/CardsList/CardsList";
import mocks from "../../mocks/mocks.json";

function Animals() {
    return (
        <>
            <h2>Animais</h2>
            <CardsList items={mocks.animais} />
        </>
    );
}

export default Animals;