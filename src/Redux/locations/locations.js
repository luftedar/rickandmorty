import * as apiCalls from '../../Api/api';

const FETCH_LOCATIONS = 'charactersStore/characters/FETCH_LOCATIONS';
const initialState = [];

export const fetchAllLocations = () => async (dispatch) => {
  const apiData = await apiCalls.getAllLocations();
  const payload = apiData.results;
  dispatch({
    type: FETCH_LOCATIONS,
    payload,
  });
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default locationsReducer;
