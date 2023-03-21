import style from "./DetailCard.module.css";

const DetailCard = (props) => {
  return (
    <div className={style.detailCard}>
      <img
        src={props.flagImg}
        className={style.flag}
        alt={props.name + " flag"}
      />
      <p>Name: {props.name.toUpperCase()}</p>
      <p>Continent: {props.continent.toUpperCase()}</p>
      <p>Capital: {props.capital.toUpperCase()}</p>
      <p> Subregion: {props.subregion.toUpperCase()}</p>
      <p>Area: {props.area}</p>
      <p>Population: {props.population}</p>
      {console.log(props)}
      Activities:
      <ul>
        {console.log(props.activities)}
        {props.activities !== "no activity related" ? (
          props.activities.map((act) => {
            return (
              <li key={act.id}>
                <p>Name: {act.name}</p>
                <p>Dificulty: {act.dificulty}</p>
                <p>Duration: {act.duration}</p>
                <p>Season: {act.season}</p>
              </li>
            );
          })
        ) : (
          <li> No activities available </li>
        )}
      </ul>
    </div>
  );
};

export { DetailCard };
