/* eslint-disable */

function Character({ character }) {
  return (
    <li className="character-item" key={character.id}>
      <img src={character.image} alt={character.name}></img>
      Name: {character.name}
    </li>
  );
}

export default Character;
