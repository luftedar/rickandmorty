const APIURL = 'https://rickandmortyapi.com/api';
const CHARACTERS = 'character';
const LOCATIONS = 'location';
const EPISODES = 'episode';
const LOCATIONARRAY = Array.from({ length: 126 }, (_, i) => i + 1);

export const getAllCharacters = async (page = 1) => {
  const req = await fetch(`${APIURL}/${CHARACTERS}/?page=${page}`);
  const apiCharacters = await req.json();
  return apiCharacters;
};

export const getAllLocations = async () => {
  const req = await fetch(`${APIURL}/${LOCATIONS}/${[...LOCATIONARRAY]}`);
  const apiLocations = await req.json();
  console.log(apiLocations);
  return apiLocations;
};

export const getAllEpisodes = async () => {
  const req = await fetch(`${APIURL}/${EPISODES}`);
  const apiEpisodes = await req.json();
  console.log(apiEpisodes);
  return apiEpisodes;
};

export default { getAllCharacters, getAllLocations, getAllEpisodes };
