import CardsList from "../../components/CardsList/CardsList";
import mocks from "../../mocks/mocks.json";

function People() {
  return (
    <>
      <h2>Pessoas</h2>
      <CardsList items={mocks.pessoas} />
    </>
  );
}

export default People;
