import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  ORDER_ALPHABETICAL,
  ORDER_POPULATION,
  ORDER_CONTINENT,
  GET_ACTIVITIES,
  BY_ACTIVITY,
} from "../actions/index";

const initialState = {
  countries: [],
  filteredCountries: [],
  activities: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        filteredCountries: action.payload,
      };
    case ORDER_ALPHABETICAL:
      let orderedCountries = [...state.countries];
      orderedCountries = orderedCountries.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === "ascendente" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "ascendente" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCountries: orderedCountries,
      };
    case ORDER_POPULATION:
      let orderedPopulation = [...state.countries];
      orderedPopulation = orderedPopulation.sort((a, b) => {
        if (a.population < b.population) {
          return action.payload === "ascendente" ? -1 : 1;
        }
        if (a.population > b.population) {
          return action.payload === "ascendente" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredCountries: orderedPopulation,
      };
    case ORDER_CONTINENT:
      let allCountries = [...state.countries];
      let filteredContinents =
        action.payload === "all"
          ? allCountries
          : allCountries.filter((p) => p.continent === action.payload);
      return {
        ...state,
        filteredCountries: filteredContinents,
      };
    case GET_ACTIVITIES:
        return{
        ...state,
        activities: action.payload
      };
    case BY_ACTIVITY:
      const allCountriesActivities = state.countries;
      const filteredActivities = 
        action.payload === "all" 
          ? allCountriesActivities.filter((p) => p.Activities?.name 
          ? p.Activities : false):
          allCountriesActivities.filter((p) => p.Activities.some(({ name }) => name === action.payload))
      return {
            ...state,
            filteredCountries: filteredActivities
        }
    default:
      return state;
  }
}
