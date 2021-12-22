import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <li className="character-item" key={character.id}>
      <img src={character.image} alt={character.name} className="character-image" />
      <div className="character-container">
        <div className="card-description d-flex-col">
          <div>
            Name:
            {' '}
            {character.name}
            <br />
            Status:
            {' '}
            {character.status}
          </div>
          <div className="card-button">
            <Link to={`/character/${character.id}`}>More</Link>
          </div>
        </div>
      </div>
    </li>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Character;
