import {
  GET_COUNTRIES,
  GET_COUNTRY_ID,
  GET_ACTIVITIES,
  POST_SEARCH_RESULTS,
  CHANGE_PAGE,
  SEARCH_COUNTRY,
} from "./actions";

const initialState = {
  countries: [],
  singleCountry: {},
  activities: [],
  searchResults: [],
  currentPage: "0",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        searchResults: action.payload,
      };
    case GET_COUNTRY_ID:
      return { ...state, singleCountry: action.payload };
    case GET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case POST_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case SEARCH_COUNTRY:
      return { ...state, searchResults: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
