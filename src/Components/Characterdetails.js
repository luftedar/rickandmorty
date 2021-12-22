/* eslint-disable */
import { useSelector } from 'react-redux';
import { BsBackspace } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Characters from './Characters';

function Characterdetails() {
  const pageURL = window.location.href;
  const urlArray = pageURL.split('/');
  const pageID = parseInt(urlArray[urlArray.length-1], 10);
  const characters = useSelector((state) => (state.charactersReducer));
  const trueCharacter = (characters.filter((character) => character.id === pageID))[0];
  return (
      <div className="char-details-bg">
        <div className="char-details">
          <div className="detail-image">
          <div>
            <img src={trueCharacter.image} alt={trueCharacter.image} />
          </div>
          <div className="go-back">
            <Link to ="/characters"><BsBackspace color="red"><Characters /></BsBackspace></Link>
          </div>
          </div>
          <div className="detail-desc">
            <h1>{trueCharacter.name}</h1>
            <ul className="detail-ul">
              <li>Status:
                {"  "}
                {trueCharacter.status === "Alive" ? 
                <span> {trueCharacter.status} <div className="green-dot dot"/></span> :
                trueCharacter.status === "Dead" ?
                <span>{trueCharacter.status} <div className="red-dot dot"/></span> :
                <span>{trueCharacter.status} <div className="dot" /></span>
                }
              </li>
              <li>Species: 
              {"  "}
              {trueCharacter.species}</li>
              <li>Gender: 
              {"  "}
              {trueCharacter.gender}</li>
              <li>Origin: 
              {"  "}
              {trueCharacter.origin.name}</li>
              <li>Location: 
              {"  "}
              {trueCharacter.location.name}</li>
              <li>Played Episodes:
              {"  "}
              {trueCharacter.episode.length}</li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default Characterdetails;
