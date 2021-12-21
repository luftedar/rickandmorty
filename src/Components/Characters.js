import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Character from './Character';
import { fetchAllCharacters } from '../Redux/characters/characters';
import Page from './Page';

function Characters() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.charactersReducer);
  useEffect(() => { dispatch(fetchAllCharacters()); }, []);
  const maxPageValue = Array.from({ length: 42 }, (_, i) => i + 1);
  const newPage = (pageValue) => {
    dispatch(fetchAllCharacters(pageValue));
  };
  return (
    <div className="character-container">
      <div className="character-header">
        Characters
        <br />
        Total 826, Select Page Number From Dropdown List to Navigate
      </div>
      <div className="character-listing">
        <div>Filter By Character</div>
        <select name="page" id="pages" onChange={(e) => { newPage(e.target.value); }}>
          {maxPageValue.map((number) => (
            <Page
              key={number}
              number={number}
            />
          ))}
        </select>
        <ul className="list-of-characters">
          {characters.map((character) => (
            <Character
              key={character.id}
              character={character}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Characters;
