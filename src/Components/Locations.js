import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllLocations } from '../Redux/locations/locations';
import Location from './Location';

function Locations() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locationsReducer);
  useEffect(() => { dispatch(fetchAllLocations()); }, []);
  console.log(locations);
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
  );
}

export default Locations;
