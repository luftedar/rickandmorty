import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getSingleCharacter } from '../Redux/characters/characters';

function Characterdetails() {
  const dispatch = useDispatch();
  const pageURL = window.location.href;
  const pageID = parseInt(pageURL.split('/')[4], 10);
  console.log(pageID);
  const character = useSelector((state) => (
    state.length !== 1 ? state.charactersReducer : state));
  useEffect(() => {
    if (character.length !== 1) {
      dispatch(getSingleCharacter(pageID));
    }
  }, []);
  console.log('character', character);
  return (
    <div>
      Deneme
    </div>
  );
}

export default Characterdetails;
