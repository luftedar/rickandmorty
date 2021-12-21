/* eslint-disable */
import { useSelector } from 'react-redux';

function Characterdetails() {
  const pageURL = window.location.href;
  const pageID = parseInt(pageURL.split('/')[4], 10);
  const characters = useSelector((state) => (state.charactersReducer));
  const trueCharacter = (characters.filter((character) => character.id === pageID))[0];
  return (
    <div>
      Character Name:
      {trueCharacter.name}
      Character Status:
      {trueCharacter.status}
      Character Species:
      {trueCharacter.species}
      Character Gender:
      {trueCharacter.gender}
      Character Origin:
      {trueCharacter.origin.name}
      Character Location:
      {trueCharacter.location.name}
      Character Episodes:
      {trueCharacter.episode.length}  
    </div>
  );
}

export default Characterdetails;
