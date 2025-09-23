import CardsList from "../../components/CardsList/CardsList";
import mocks from "../../mocks/mocks.json";
import "./Home.css";

function Home() {
  console.log(mocks);
  return (
    <>
      <h2>Animais</h2>
      <CardsList items={mocks.animais} />
      <h2>Livros</h2>
      <CardsList items={mocks.livros} />
      <h2>Pessoas</h2>
      <CardsList items={mocks.pessoas} />
    </>
  );
}

export default Home;
