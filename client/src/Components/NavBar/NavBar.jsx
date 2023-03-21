import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <button
        className={style.button}
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://countries-pi-production-c7b2.up.railway.app";
        }}
      >
        {" "}
        Landing{" "}
      </button>{" "}
      <button
        className={style.button}
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://countries-pi-production-c7b2.up.railway.app/home";
        }}
      >
        {" "}
        Home{" "}
      </button>{" "}
      <button
        className={style.button}
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://countries-pi-production-c7b2.up.railway.app/create";
        }}
      >
        {" "}
        Create your Adventure!{" "}
      </button>{" "}
    </div>
  );
};

export default NavBar;
