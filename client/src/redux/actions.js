import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRY_ID = "GET_COUNTRY_ID";

const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/countries");
    const countries = apiData.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

const getCountryById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/countries/${id}`);
    const country = apiData.data;
    console.log(country);
    dispatch({ type: GET_COUNTRY_ID, payload: country });
  };
};

export { getCountries, GET_COUNTRIES, getCountryById, GET_COUNTRY_ID };
