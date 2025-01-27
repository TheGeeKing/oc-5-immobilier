import { Navigate, useParams } from "react-router";
import "./Logement.scss";
import logements from "../../assets/logements.json";
import { Badge } from "../../components/Badge";
import { DropDown } from "../../components/DropDown";
import { Rating } from "../../components/Rating";
import { Slideshow } from "../../components/Slideshow";

const Logement = () => {
  const { id } = useParams();

  // get infos from logements.json
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div id="logement">
      <Slideshow imagesSrc={logement.pictures} />
      <div className="header">
        <div className="infos">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div id="badges">
            {logement.tags.map((tag, index) => (
              <Badge text={tag} key={index} />
            ))}
          </div>
        </div>
        <div id="host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt="host picture"
              className="host-img"
            />
          </div>
          <Rating rating={Number(logement.rating)} />
        </div>
      </div>
      <div className="sub-header"></div>
      <div id="dropdowns">
        <DropDown name="Description" items={[logement.description]} />
        <DropDown name="Équipements" items={logement.equipments} />
      </div>
    </div>
  );
};

export default Logement;
