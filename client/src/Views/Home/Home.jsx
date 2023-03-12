import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import { Filters } from "../../Components/Filters/Filters";
import { Pages } from "../../Components/Pages/Pages";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());

    console.log("pasando por home");
  }, []);

  return (
    <>
      <h1> Esta es la vista de home</h1>
      <Filters />
      <CardsContainer />
      <Pages />
    </>
  );
};

export default Home;
