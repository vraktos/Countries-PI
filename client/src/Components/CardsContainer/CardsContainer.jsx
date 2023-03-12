import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const countries = useSelector((state) => state.searchResults);
  console.log(countries.length);
  const currentPage = useSelector((state) => state.currentPage);
  const current10 = countries.slice(currentPage, +currentPage + 10);

  return (
    <div className={style.cardsContainer}>
      {current10.map((country) => {
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
