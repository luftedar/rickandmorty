import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Character from './Character'


function Characters() {
  
  return (
    <div className="character-container">
      <ul>
        <Character key={Character.id} character={character} />
      </ul>
    </div>
  )
}

export default Characters
