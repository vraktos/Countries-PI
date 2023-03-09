import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const countries = useSelector((state) => state.countries);

  return (
    <div className={style.cardsContainer}>
      {countries.map((country) => {
        return (
          <Card
            id={country.id}
            flagImg={country.flagImg}
            name={country.name}
            continent={country.continent}
            key={country.id}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
