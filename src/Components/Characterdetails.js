/* eslint-disable */
import { useSelector } from 'react-redux';
import { BsBackspace } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Chart } from "react-google-charts";
import Characters from './Characters';

function Characterdetails() {
  const pageURL = window.location.href;
  const urlArray = pageURL.split('/');
  const pageID = parseInt(urlArray[urlArray.length - 1], 10);
  const characters = useSelector((state) => (state.charactersReducer));
  const trueCharacter = (characters.filter((character) => character.id === pageID))[0];
  console.log(trueCharacter);
  return (
      <div className="char-details">
        <div className="detail-header">
          <div className="go-back">
            <Link to="/characters">
              <BsBackspace>
                <Characters />
              </BsBackspace>
            </Link>
          </div>
          <div className="header-name">
            <p>{trueCharacter.name}</p>
          </div>
        </div>
        <div className="detail-image">
          <div>
            <img src={trueCharacter.image} alt={trueCharacter.image} />
          </div>
        </div>
        <div className="character-stats">
          <h5 className="character-stats-header">
            {trueCharacter.name}{" "}{"Stats"} 
          </h5>
        </div>
        <div className="detail-desc">
          <ul className="detail-ul">
           <li>
              First Seen on:
              {'  '}
              {trueCharacter.origin.name}
           </li>
           <li>
             Last Seen On:
             {'  '}
             {trueCharacter.location.name}
           </li>
            <li>
              Status:
              {'  '}
              {trueCharacter.status === 'Alive'
                ? (
                  <span>
                    {' '}
                    {trueCharacter.status}
                    {' '}
                    <div className="green-dot dot" />
                  </span>
                )
                : trueCharacter.status === 'Dead'
                  ? (
                    <span>
                      {trueCharacter.status}
                      {' '}
                      <div className="red-dot dot" />
                    </span>
                  )
                  : (
                    <span>
                      {trueCharacter.status}
                      {' '}
                      <div className="dot" />
                    </span>
                  )}
            </li>
            <li>
              Species:
              {'  '}
              {trueCharacter.species}
            </li>
            <li>
              Gender:
              {'  '}
              {trueCharacter.gender}
            </li>

            <li>
              Played Episodes:
              {'  '}
            </li>
          </ul>
          <p>Played on {trueCharacter.episode.length} Episode(s) out of 51 Episodes</p>
        </div>
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Episodes', 'Total Episodes'],
              ['Played Episodes', trueCharacter.episode.length === 51 ?
              (51 + trueCharacter.episode.length) / 102 :
              trueCharacter.episode.length
            ],
              ['Not Played', trueCharacter.episode.length === 51 ?
              (51 - trueCharacter.episode.length) / 102 :
              51 - trueCharacter.episode.length
            ],
            ]}
            options={{
              title: 'Played Episodes',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
      </div>
  );
}

export default Characterdetails;
