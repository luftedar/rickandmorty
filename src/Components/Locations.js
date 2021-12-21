import { useEffect } from "react";
import { useSelector, UseDispatch, useDispatch} from 'react-redux';
import { fetchAllLocations } from '../Redux/locations/locations'

function Locations() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.episodesReducer);
  useEffect(() => { dispatch(fetchAllLocations()); }, [])
  return (
    <div>
      <ul>
        {locations.map((location) => (
          <Location
            key={location.id}
            location={location}
          />
        ))}
      </ul>
    </div>
  )
}

export default Locations
