import * as apiCalls from '../../Api/api';

const FETCH_CHARACTERS = 'charactersStore/characters/FETCH_CHARACTERS';
const GET_SINGLE_CHARACTER = 'charactersStore/characters/GET_SINGLE_CHARACTER';
const initialState = [];

export const fetchAllCharacters = (page) => async (dispatch) => {
  const apiData = await apiCalls.getAllCharacters(page);
  const payload = apiData.results;
  dispatch({
    type: FETCH_CHARACTERS,
    payload,
  });
};

export const getSingleCharacter = (id) => ({
  type: GET_SINGLE_CHARACTER,
  id,
});

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return action.payload;
    default:
      return state;
  }
};

export default charactersReducer;
