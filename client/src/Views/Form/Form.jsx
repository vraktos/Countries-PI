import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Form = () => {
  const countNames = useSelector((state) => state.countries);

  const [form, setForm] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [error, setError] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
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
  };

  const validate = (form) => {};

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property !== "countries") {
      setForm({ ...form, [property]: value });
    } else {
      setForm({
        ...form,
        [property]: [...form.countries, value],
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        />
      </div>
      <div>
        <label>Dificulty: </label>
        <select
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
      <div>
        <label>Duration: </label>
        <input
          type="text"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
        <label> hs</label>
      </div>
      <div>
        <label>Season: </label>
        <select
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
      <div>
        <label>Countries: </label>
        <select
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
