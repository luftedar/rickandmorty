import characters from './api';

const fetchingResults = () => characters().then((results) => results);

export default fetchingResults;
