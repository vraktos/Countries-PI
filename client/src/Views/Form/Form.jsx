import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: "",
  });

  const changeHandler = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
  };

  return (
    <form>
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
        <input
          type="number"
          value={form.dificulty}
          onChange={changeHandler}
          name="dificulty"
        />
      </div>
      <div>
        <label>Duration: </label>
        <input
          type="number"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
      </div>
      <div>
        <label>Season: </label>
        <input
          type="text"
          value={form.season}
          onChange={changeHandler}
          name="season"
        />
      </div>
      <div>
        <label>Countries: </label>
        <input
          value={form.countries}
          onChange={changeHandler}
          name="countries"
        />
      </div>
    </form>
  );
};

export default Form;
