import style from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <button className={style.button}>
        {" "}
        <Link to="https://countries-pi-production-c7b2.up.railway.app"></Link>{" "}
        Landing{" "}
      </button>{" "}
      <button className={style.button}>
        <Link to="https://countries-pi-production-c7b2.up.railway.app/home"></Link>{" "}
        Home{" "}
      </button>{" "}
      <button className={style.button}>
        <Link to="https://countries-pi-production-c7b2.up.railway.app/create"></Link>{" "}
        Create your Adventure!{" "}
      </button>{" "}
    </div>
  );
};

export default NavBar;
