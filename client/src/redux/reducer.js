import { GET_COUNTRIES, GET_COUNTRY_ID } from "./actions";

const initialState = {
  countries: [],
  singleCountry: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state, countries: action.payload };
    case GET_COUNTRY_ID:
      return { ...state, singleCountry: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
