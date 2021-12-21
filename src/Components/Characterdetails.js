import { useSelector } from 'react-redux';

function Characterdetails() {
  const pageURL = window.location.href;
  const pageID = parseInt(pageURL.split('/')[4], 10);
  console.log(pageID);
  const characters = useSelector((state) => (state.charactersReducer));
  const trueCharacter = characters.filter((character) => character.id === pageID);
  console.log(trueCharacter);
  return (
    <div>
      Deneme
    </div>
  );
}

export default Characterdetails;
