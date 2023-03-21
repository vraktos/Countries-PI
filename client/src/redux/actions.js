import axios from "axios";

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRY_ID = "GET_COUNTRY_ID";
const GET_ACTIVITIES = "GET_ACTIVITIES";
const POST_SEARCH_RESULTS = "POST_SEARCH_RESULTS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SEARCH_COUNTRY = "SEARCH_COUNTRY";

const getCountries = () => {
  return async function (dispatch) {
    const apiData = await axios.get("/countries");
    const countries = apiData.data;
    dispatch({ type: GET_COUNTRIES, payload: countries });
  };
};

const getActivities = () => {
  return async function (dispatch) {
    const apiData = await axios.get("/activities");
    const activities = apiData.data;
    dispatch({ type: GET_ACTIVITIES, payload: activities });
  };
};

const postSearchResults = (searchResults) => {
  return function (dispatch) {
    dispatch({ type: POST_SEARCH_RESULTS, payload: searchResults });
  };
};

const changePage = (page) => {
  return function (dispatch) {
    dispatch({ type: CHANGE_PAGE, payload: page });
  };
};
const getCountryById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/countries/${id}`);
    const country = apiData.data;
    dispatch({ type: GET_COUNTRY_ID, payload: country });
  };
};

const searchCountry = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`/countries?name=${name}`);
    const countries = apiData.data;
    dispatch({ type: SEARCH_COUNTRY, payload: countries });
  };
};

export {
  getCountries,
  GET_COUNTRIES,
  getCountryById,
  GET_COUNTRY_ID,
  getActivities,
  GET_ACTIVITIES,
  postSearchResults,
  POST_SEARCH_RESULTS,
  changePage,
  CHANGE_PAGE,
  searchCountry,
  SEARCH_COUNTRY,
};
