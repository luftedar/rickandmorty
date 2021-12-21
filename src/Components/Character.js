/* eslint-disable */

function Character({ character }) {
  return (
    <li className="character-item" key={character.id}>
      <img src={character.image} alt={character.name} className="character-image"></img>
      <div className="character-container">
        Name: {character.name}
      </div>
    </li>
  );
}

export default Character;
