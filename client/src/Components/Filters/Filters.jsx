import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postSearchResults, changePage } from "../../redux/actions";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  console.log(activities);
  const countries = useSelector((state) => state.countries);

  const continents = [];
  countries.forEach((country) => {
    if (!continents.includes(country.continent)) {
      continents.push(country.continent);
    }
  });

  const [filter, setFilter] = useState({
    activity: "",
    continent: "",
  });

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFilter({ ...filter, [property]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let searchResults = [];
    const CountryIdWithActivity = [];

    const filteredActivity = activities.find((act) => {
      return act.name === filter.activity;
    });

    filteredActivity?.Countries.forEach((country) => {
      CountryIdWithActivity.push(country.id);
    });

    if (filter.activity === "" && filter.continent === "") {
      searchResults = countries;
    }

    if (filter.activity !== "" && filter.continent === "") {
      searchResults = countries.filter((country) => {
        return CountryIdWithActivity.includes(country.id);
      });
    }
    if (filter.activity === "" && filter.continent !== "") {
      searchResults = countries.filter((country) => {
        return country.continent === filter.continent;
      });
    }
    if (filter.activity !== "" && filter.continent !== "") {
      searchResults = countries.filter((country) => {
        return (
          country.continent === filter.continent &&
          CountryIdWithActivity.includes(country.id)
        );
      });
    }

    dispatch(postSearchResults(searchResults));
    dispatch(changePage(0));
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={style.form}>
        <div>
          <label> Select an activity</label>
          <select
            placeholder="Activities..."
            value={filter.activity}
            onChange={changeHandler}
            name="activity"
          >
            <option value="">None</option>
            {activities.map((act) => {
              return <option key={act.name}> {act.name}</option>;
            })}
          </select>
        </div>

        <div>
          <label> Select continent</label>
          <select
            value={filter.continent}
            onChange={changeHandler}
            name="continent"
          >
            <option value="">None</option>

            {continents.map((cont) => {
              return <option key={cont}>{cont}</option>;
            })}
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export { Filters };
