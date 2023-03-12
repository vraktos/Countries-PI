import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1> Esta es la vista de Landing</h1>
      <button>
        {" "}
        <Link to="/home"> Home</Link>
      </button>
    </>
  );
};

export default Landing;
