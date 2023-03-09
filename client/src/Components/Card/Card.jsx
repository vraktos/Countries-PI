import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>
        Name: <Link to={"/detail/" + props.id}>{props.name} </Link>
      </p>
      {/* <p>Name: {props.name}</p> */}

      <p>
        {" "}
        Flag: <img src={props.flagImg} alt={props.name + "flag"} />
      </p>
      <p>Continent: {props.continent}</p>
    </div>
  );
};

export default Card;
