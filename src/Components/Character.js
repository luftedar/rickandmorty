/* eslint-disable */
import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <li className="character-item" key={character.id}>
      <img src={character.image} alt={character.name} className="character-image"></img>
      <div className="character-container">
        <div className="card-description d-flex-col">
          <div>
            Name: {character.name}
            <br />
            Status: {character.status}
          </div>
          <div className="card-button">
            <Link to={`/character/${character.id}`}>More</Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Character;
