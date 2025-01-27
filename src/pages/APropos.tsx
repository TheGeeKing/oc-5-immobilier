import { HeaderSubCard } from "../components/HeaderSubCard";
import { DropDown } from "../components/DropDown";
import "./APropos.scss";

const APropos = () => {
  return (
    <div id="a-propos">
      <HeaderSubCard
        src="/src/assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png"
        alt="Vue montagne"
      />

      <div className="dropdowns">
        <DropDown
          name="Fiabilité"
          items={[
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
          ]}
        />
        <DropDown
          name="Respect"
          items={[
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
          ]}
        />
        <DropDown
          name="Service"
          items={[
            "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires soit empreinte de respect et de bienveillance.",
          ]}
        />
        <DropDown
          name="Sécurité"
          items={[
            "La sécurité est la priorité de Kasa- Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services En laissant une note aussi bien à l'hôte qu'au locataire, cela à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
          ]}
        />
      </div>
    </div>
  );
};

export default APropos;
