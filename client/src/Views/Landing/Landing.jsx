import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.landing}>
      <div className={style.welcome}>
        {" "}
        Welcome to Countries of the World
        <button
          className={style.homeButton}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:3000/home";
          }}
        >
          {" "}
          Home{" "}
        </button>{" "}
      </div>
    </div>
  );
};

export default Landing;
