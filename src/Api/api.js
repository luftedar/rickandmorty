const APIURL = 'https://rickandmortyapi.com/api';
const CHARACTERS = 'character';
const LOCATIONS = 'location';
const EPISODES = 'episode';
const LOCATIONARRAY = Array.from({ length: 126 }, (_, i) => i + 1);
const EPISODESARRAY = Array.from({ length: 51 }, (_, i) => i + 1);

export const getAllCharacters = async (page = 1) => {
  const req = await fetch(`${APIURL}/${CHARACTERS}/?page=${page}`);
  const apiCharacters = await req.json();
  return apiCharacters;
};

export const getSingleCharacter = async (id) => {
  const req = await fetch(`${APIURL}/${CHARACTERS}/${id}`);
  const apiCharacter = await req.json();
  return apiCharacter;
};

export const getAllLocations = async () => {
  const req = await fetch(`${APIURL}/${LOCATIONS}/${[...LOCATIONARRAY]}`);
  const apiLocations = await req.json();
  return apiLocations;
};

export const getAllEpisodes = async () => {
  const req = await fetch(`${APIURL}/${EPISODES}/${[...EPISODESARRAY]}`);
  const apiEpisodes = await req.json();
  return apiEpisodes;
};

export default { getAllCharacters, getAllLocations, getAllEpisodes };
