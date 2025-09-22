import CardsList from "../../components/Card/CardsList/CardsList";
import mocks from "../../mocks/mocks.json";
import "./Home.css";

function Home() {
  console.log(mocks);
  return (
    <div className="home-container">
      <CardsList items={mocks.animais} />
    </div>
  );
}

export default Home;
