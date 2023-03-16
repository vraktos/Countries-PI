import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import { Filters } from "../../Components/Filters/Filters";
import { Pages } from "../../Components/Pages/Pages";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { Sorter } from "../../Components/Sorters/Sorter";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());

    console.log("pasando por home");
  }, []);

  return (
    <div className={style.homeContainer}>
      <div className={style.filtersContainer}>
        <Sorter />
        <SearchBar />
        <Filters className={style.filters} />
      </div>
      <CardsContainer />
      <Pages />
    </div>
  );
};

export default Home;
