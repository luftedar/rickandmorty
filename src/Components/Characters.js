import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Character from './Character';
import { fetchAllCharacters } from '../Redux/characters/characters';

function Characters() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.charactersReducer);
  useEffect(() => { dispatch(fetchAllCharacters()); }, []);
  return (
    <div className="character-container">
      <ul>
        {characters.map((character) => (
          <Character
            key={character.id}
            character={character}
          />
        ))}
      </ul>
    </div>
  );
}

export default Characters;
