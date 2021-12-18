const APIURL = 'https://rickandmortyapi.com/api';
const CHARACTERS = 'character';
const LOCATIONS = 'location';
const EPISODES = 'episode';

export const getAllCharacters = async () => {
  const req = await fetch(`${APIURL}/${CHARACTERS}`)
  const apiCharacters = await req.json();
  return apiCharacters;
}

export const getAllLocations = async () => {
  const req = await fetch(`${APIURL}/${LOCATIONS}`);
  const apiLocations = await req.json();
  return apiLocations;
}
