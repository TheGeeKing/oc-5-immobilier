import "./Card.scss";
import logements from "../assets/logements.json";

type CardProps = {
  id: string;
};

export const Card = ({ id }: CardProps) => {
  const logement = logements.find((logement) => logement.id === id);

  return (
    <a className="card" href={`logement/${id}`}>
      <img src={logement?.cover} width={340} height={340}></img>
      <h3>{logement?.title}</h3>
    </a>
  );
};
