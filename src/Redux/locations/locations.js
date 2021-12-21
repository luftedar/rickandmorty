import * as apiCalls from '../../Api/api';

const FETCH_LOCATIONS = 'charactersStore/characters/FETCH_LOCATIONS';
const initialState = [];

export const fetchAllLocations = () => async (dispatch) => {
  const payload = await apiCalls.getAllLocations();
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
