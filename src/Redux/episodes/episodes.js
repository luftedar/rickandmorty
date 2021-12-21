import * as apiCalls from '../../Api/api';

const FETCH_EPISODES = 'charactersStore/characters/FETCH_EPISODES';
const initialState = [];

export const fetchAllEpisodes = () => async (dispatch) => {
  const payload = await apiCalls.getAllEpisodes();
  dispatch({
    type: FETCH_EPISODES,
    payload,
  });
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return action.payload;
    default:
      return state;
  }
};

export default episodesReducer;
