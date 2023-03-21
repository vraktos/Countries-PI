import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <button className={style.button}>
        {" "}
        <Link to="https://countries-pi-production-c7b2.up.railway.app">
          Landing{" "}
        </Link>{" "}
      </button>{" "}
      <button className={style.button}>
        <Link to="https://countries-pi-production-c7b2.up.railway.app/home">
          Home{" "}
        </Link>{" "}
      </button>{" "}
      <button className={style.button}>
        <Link to="https://countries-pi-production-c7b2.up.railway.app/create">
          Create your Adventure!{" "}
        </Link>{" "}
      </button>{" "}
    </div>
  );
};

export default NavBar;
