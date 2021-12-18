/* eslint-disable */

function Character({ character }) {
  console.log(character);
  return (
    <li className="character-item" key={character.id}>
      Name: {character.name}
    </li>
  );
}

export default Character;
