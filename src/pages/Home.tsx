import { HeaderSubCard } from "../components/HeaderSubCard";
import { Card } from "../components/Card";
import "./Home.scss";
import logements from "../assets/logements.json";

const Home = () => {
  return (
    <div id="home">
      <HeaderSubCard
        src="/src/assets/Image source 1.png"
        alt="Header Sub Card"
        text="Chez vous, partout et ailleurs"
      />

      <div className="cards-container">
        {logements.map((logement, index) => (
          <Card id={logement.id} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
