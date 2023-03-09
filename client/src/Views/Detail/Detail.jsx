import { DetailCard } from "../../Components/DetailCard/DetailCard";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountryById } from "../../redux/actions";

const Detail = () => {
  const location = useLocation();
  const id = location.pathname.substr(8);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("pasando por el useEffect");
    dispatch(getCountryById(id));
  }, [id]);

  const country = useSelector((state) => state.singleCountry);

  return (
    <>
      <h1> Esta es la vista de Detail</h1>
      {country.id ? (
        <DetailCard
          id={country.id}
          name={country.name}
          flagImg={country.flagImg}
          continent={country.contient}
          capital={country.capital}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
          activities={country.Activities}
        />
      ) : (
        <span> Loading... </span>
      )}
    </>
  );
};

export default Detail;
