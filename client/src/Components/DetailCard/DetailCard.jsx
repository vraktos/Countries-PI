import style from "./DetailCard.module.css";

const DetailCard = (props) => {
  return (
    <div className={style.detailCard}>
      <p> ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Flag : {props.flagImg}</p>
      <p>Continent: {props.continent}</p>
      <p>Capital: {props.capital}</p>
      <p> SubRegion {props.subregion}</p>
      <p>Area: {props.area}</p>
      <p>Population: {props.population}</p>
      {console.log(props)}
      <p>
        Activities
        <ul>
          {props.activities?.map((act) => {
            return (
              <li key={act.id}>
                <p>Name: {act.name}</p>
                <p>Dificulty: {act.dificulty}</p>
                <p>Duration: {act.duration}</p>
                <p>Season: {act.Season}</p>
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
};

export { DetailCard };
