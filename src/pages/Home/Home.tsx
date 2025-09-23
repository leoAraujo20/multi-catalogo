import CardsList from "../../components/Card/CardsList/CardsList";
import mocks from "../../mocks/mocks.json";
import "./Home.css";

function Home() {
  console.log(mocks);
  return (
    <div className="home-container">
      <CardsList items={mocks.animais} />
      <CardsList items={mocks.livros} />
      <CardsList items={mocks.pessoas} />
    </div>
  );
}

export default Home;
