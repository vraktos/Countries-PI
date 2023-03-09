import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    console.log("pasando por home");
  }, []);

  return (
    <>
      <h1> Esta es la vista de home</h1>
      <CardsContainer />
    </>
  );
};

export default Home;
