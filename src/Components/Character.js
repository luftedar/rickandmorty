/* eslint-disable */

function Character(props) {
  const { character } = props;
  return (
    <li className="character-item">
      {character.name}
    </li>
  );
}

export default Character;
