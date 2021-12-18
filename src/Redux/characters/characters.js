import * as apiCalls from '../../Api/api';

const FETCH_CHARACTERS = 'charactersStore/characters/FETCH_CHARACTERS';
const initialState = [];

export const fetchAllCharacters = (payload) => async (dispatch) => {
  await apiCalls.getAllCharacters(payload);
  dispatch({
    type: FETCH_CHARACTERS,
    payload,
  });
};
