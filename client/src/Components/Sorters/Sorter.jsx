import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postSearchResults } from "../../redux/actions";

const Sorter = () => {
  const countries = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();
  const sortedArray = [...countries];

  const sortHandler = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "popAsc":
        sortedArray.sort((a, b) => {
          return a.population - b.population;
        });
        break;
      case "popDes":
        sortedArray.sort((a, b) => {
          return b.population - a.population;
        });
        break;
      case "nameAsc":
        sortedArray.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        break;
      case "nameDes":
        sortedArray.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
        break;
      default:
        return;
    }
    console.log(sortedArray);
    dispatch(postSearchResults([...sortedArray]));
  };

  return (
    <div>
      <label> Sort By </label>
      <form onSubmit={sortHandler}>
        <select onChange={sortHandler}>
          <option></option>
          <option value="popAsc">Population (ascending) </option>
          <option value="popDes">Population (descending)</option>
          <option value="nameAsc">Name (ascending)</option>
          <option value="nameDes">Name (descending)</option>
        </select>
      </form>
    </div>
  );
};

export { Sorter };
