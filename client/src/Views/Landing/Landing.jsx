import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.welcome}>
        {" "}
        Welcome to Countries of the World
        <button className={style.homeButton}>
          <Link to="https://countries-pi-production-c7b2.up.railway.app/home">
            Home{" "}
          </Link>{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default Landing;
