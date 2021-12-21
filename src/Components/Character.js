/* eslint-disable */
import { Link } from "react-router-dom";

function Character({ character }) {
  const seeMore = (e) => {
    console.log(e.target)
  }
  return (
    <li className="character-item" key={character.id}>
      <img src={character.image} alt={character.name} className="character-image"></img>
      <div className="character-container">
        <div className="card-description d-flex s-between a-center">
          <div>
            Name: {character.name}
            <br />
            Status: {character.status}
          </div>
          <div>
            <Link to={`/characters/${character.id}`}>More</Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Character;
