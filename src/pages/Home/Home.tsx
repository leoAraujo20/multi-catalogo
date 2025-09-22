import Card from "../../components/Card/Card";
import mocks from "../../mocks/mocks.json";
import "./Home.css";

function Home() {
  console.log(mocks);
  return (
    <div className="home-container">
      <h1>Bem Vindo!</h1>
      <ul className="cards-list">
        {mocks.animais.map((animal, index) => (
          <li key={animal.id}>
            <Card key={index} content={animal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
