import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBackspace } from 'react-icons/bs';
import Character from './Character';
import { fetchAllCharacters } from '../Redux/characters/characters';
import Page from './Page';
import Home from './Home';

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
      <div className="home-go-back">
        <Link to="/">
          <BsBackspace>
            <Home />
          </BsBackspace>
        </Link>
      </div>
      <div className="character-header">
        Characters
        <br />
        Total 826, Select Page Number From Dropdown List to Navigate
      </div>
      <div className="character-listing">
        <div className="filter-status d-flex">
          <div>Filter By Character</div>
          <select name="page" id="pages" onChange={(e) => { newPage(e.target.value); }}>
            {maxPageValue.map((number) => (
              <Page
                key={number}
                number={number}
              />
            ))}
          </select>
        </div>
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
