import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navContainer}>
      <button
        className={style.button}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/";
        }}
      >
        {" "}
        Landing{" "}
      </button>{" "}
      <button
        className={style.button}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/home";
        }}
      >
        {" "}
        Home{" "}
      </button>{" "}
      <button
        className={style.button}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000/create";
        }}
      >
        {" "}
        Create your Adventure!{" "}
      </button>{" "}
    </div>
  );
};

export default NavBar;
