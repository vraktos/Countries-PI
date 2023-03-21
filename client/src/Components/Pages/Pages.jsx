import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../redux/actions";
import style from "./Pages.module.css";

const Pages = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.searchResults);
  const pagesAmount = Math.floor(results.length / 10);
  console.log(pagesAmount);
  const buttonsArr = [];

  for (let i = 2; i < pagesAmount + 1; i++) {
    buttonsArr.push({ name: i, value: (i - 1) * 10 });
  }

  const clickHandler = (e) => {
    dispatch(changePage(e.target.value));
  };

  return (
    <div>
      <button className={style.pages} name="1" value="0" onClick={clickHandler}>
        1
      </button>
      {buttonsArr.map((button) => {
        return (
          <button
            className={style.pages}
            name={button.name}
            value={button.value}
            key={button.name}
            onClick={clickHandler}
          >
            {" "}
            {button.name}{" "}
          </button>
        );
      })}
    </div>
  );
};

export { Pages };
