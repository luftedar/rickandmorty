import * as apiCalls from '../../Api/api';

const FETCH_CHARACTERS = 'charactersStore/characters/FETCH_CHARACTERS';
const initialState = [];

export const fetchAllCharacters = (page) => async (dispatch) => {
  const apiData = await apiCalls.getAllCharacters(page);
  const payload = apiData.results;
  dispatch({
    type: FETCH_CHARACTERS,
    payload,
  });
};
const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
};

export default charactersReducer;
