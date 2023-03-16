import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(e.target.value);
    dispatch(searchCountry(value));
  };
  return (
    <>
      <form className={style.formContainer}>
        <label> Search Country:</label>
        <input
          type="text"
          placeholder="Country..."
          onChange={searchHandler}
        ></input>
      </form>
    </>
  );
};
export { SearchBar };
