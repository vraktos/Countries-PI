import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getCountries, getActivities } from "../../redux/actions";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);
  const countNames = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities).map(
    (act) => act.name
  );

  const [form, setForm] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
  });

  const validate = (form) => {
    const nameErr =
      form.name === "" || activities.includes(form.name) ? "Name invalid" : "";
    const dificultyErr = form.dificulty === "" ? "Select a diculty" : "";
    const durationErr =
      form.duration === "" || isNaN(form.duration) ? "Invalid duration" : "";
    const seasonErr = form.season === "" ? "Select a season" : "";
    setErrors({
      name: nameErr,
      dificulty: dificultyErr,
      duration: durationErr,
      season: seasonErr,
    });
  };

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    if (property !== "countries") {
      setForm({ ...form, [property]: value });
    } else {
      if (form.countries.includes(value)) {
        setForm({
          ...form,
          countries: form.countries.filter((id) => {
            return id !== value;
          }),
        });
      } else {
        setForm({
          ...form,
          [property]: [...form.countries, value],
        });
      }
    }
    validate({ ...form, [property]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validate(form) && console.log(errors);
    console.log(errors);
    console.log(form);

    if (
      errors.name === "" &&
      errors.dificulty === "" &&
      errors.duration === "" &&
      errors.season === ""
    ) {
      console.log("validate succesfull");
      axios
        .post("http://localhost:3001/activities", form)
        .then((res) => alert(res.data))
        .catch((error) => console.log(error.message));
      setForm({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        countries: [],
      });
    } else {
      console.log("hay errores");
      return;
    }
  };

  return (
    <form onSubmit={submitHandler} className={style.formContainer}>
      <div>
        <label>Name: </label>
        <input
          className={style.selector}
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <span>{errors.name}</span>

      <div>
        <label>Dificulty: </label>
        <select
          className={style.selector}
          value={form.dificulty}
          onChange={changeHandler}
          name="dificulty"
        >
          <option value="" key={""}>
            {" "}
          </option>
          <option value="1" key={"1"}>
            {" "}
            1{" "}
          </option>
          <option value="2" key={"2"}>
            {" "}
            2{" "}
          </option>
          <option value="3" key={"3"}>
            {" "}
            3{" "}
          </option>
          <option value="4" key={"4"}>
            {" "}
            4{" "}
          </option>
          <option value="5" key={"5"}>
            {" "}
            5{" "}
          </option>
        </select>
      </div>
      <span>{errors.dificulty}</span>
      <div>
        <label>Duration: </label>
        <input
          className={style.selector}
          type="text"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
        <label> hs</label>
      </div>
      <span>{errors.duration}</span>
      <div>
        <label>Season: </label>
        <select
          className={style.selector}
          type="text"
          value={form.season}
          onChange={changeHandler}
          name="season"
        >
          <option value="" key={""}>
            {" "}
          </option>
          <option value="Spring" key={"Spring"}>
            {" "}
            Spring{" "}
          </option>
          <option value="Winter" key={"Winter"}>
            {" "}
            Winter{" "}
          </option>
          <option value="Autumn" key={"Autumn"}>
            {" "}
            Autumn{" "}
          </option>
          <option value="Summer" key={"Summer"}>
            {" "}
            Summer{" "}
          </option>
        </select>
      </div>
      <span>{errors.season}</span>
      <div className={style.countriesContainer}>
        <label>Countries: </label>
        <select
          className={style.selector}
          value={form.countries}
          onChange={changeHandler}
          name="countries"
          multiple={true}
        >
          {countNames.map((country) => {
            return (
              <option value={country.id} key={country.id} id={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>

      <button type="submit"> Create! </button>
    </form>
  );
};

export default Form;
