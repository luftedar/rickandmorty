import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllEpisodes } from '../Redux/episodes/episodes';
import Episode from './Episode';

function Episodes() {
  const dispatch = useDispatch();
  const episodes = useSelector((state) => state.episodesReducer);
  console.log(episodes);
  useEffect(() => { dispatch(fetchAllEpisodes()); }, []);
  return (
    <div>
      <ul>
        {episodes.map((episode) => (
          <Episode
            key={episode.id}
            episode={episode}
          />
        ))}
      </ul>
    </div>
  );
}

export default Episodes;
