import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../../redux/actions";

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
      <button name="1" value="0" onClick={clickHandler}>
        1
      </button>
      {buttonsArr.map((button) => {
        return (
          <button
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
      {/* <button name="2" value="10" onClick={clickHandler}>
        2
      </button>
      <button name="3" value="20" onClick={clickHandler}>
        3
      </button>
      <button name="4" value="30" onClick={clickHandler}>
        4
      </button>
      <button name="5" value="40" onClick={clickHandler}>
        5
      </button>
      <button name="6" value="50" onClick={clickHandler}>
        6
      </button>
      <button name="7" value="60" onClick={clickHandler}>
        7
      </button>
      <button name="8" value="70" onClick={clickHandler}>
        8
      </button>
      <button name="9" value="80" onClick={clickHandler}>
        9
      </button>
      <button name="10" value="90" onClick={clickHandler}>
        10
      </button>
      <button name="11" value="100" onClick={clickHandler}>
        11
      </button>
      <button name="12" value="110" onClick={clickHandler}>
        12
      </button>
      <button name="13" value="120" onClick={clickHandler}>
        13
      </button>
      <button name="14" value="130" onClick={clickHandler}>
        14
      </button>
      <button name="15" value="140" onClick={clickHandler}>
        15
      </button>
      <button name="16" value="150" onClick={clickHandler}>
        16
      </button>
      <button name="17" value="160" onClick={clickHandler}>
        17
      </button>
      <button name="18" value="170" onClick={clickHandler}>
        18
      </button>
      <button name="19" value="180" onClick={clickHandler}>
        19
      </button>
      <button name="20" value="190" onClick={clickHandler}>
        20
      </button>
      <button name="21" value="200" onClick={clickHandler}>
        21
      </button>
      <button name="22" value="210" onClick={clickHandler}>
        22
      </button>
      <button name="23" value="220" onClick={clickHandler}>
        23
      </button>
      <button name="24" value="230" onClick={clickHandler}>
        24
      </button>
      <button name="25" value="240" onClick={clickHandler}>
        25
      </button> */}
    </div>
  );
};

export { Pages };
