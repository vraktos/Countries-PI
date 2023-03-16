import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
      <p>
        <Link to={"/detail/" + props.id} className={style.link}>
          {props.name}{" "}
        </Link>
      </p>
      {/* <p>Name: {props.name}</p> */}

      <p>
        {" "}
        <img src={props.flagImg} alt={props.name + "flag"} />
      </p>
      <p className={style.link}>{props.continent}</p>
    </div>
  );
};

export default Card;
