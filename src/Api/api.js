const APIURL = 'https://rickandmortyapi.com/api';
const CHARACTERS = 'character';

export const getAllCharacters = async (page = 1) => {
  const req = await fetch(`${APIURL}/${CHARACTERS}/?page=${page}`);
  const apiCharacters = await req.json();
  return apiCharacters;
};

export default { getAllCharacters };
