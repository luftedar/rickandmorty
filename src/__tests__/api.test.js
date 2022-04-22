import '@testing-library/jest-dom/extend-expect';
import fetchingResults from '../__mocks__/apiFetch';

describe('test fetching results', () => {
  it('test fetching character name', async () => {
    await fetchingResults().then((results) => expect(results.results[0].name).toBe('Toxic Rick'));
  });
  it('test fetching character id', async () => {
    await fetchingResults().then((results) => expect(results.results[0].id).toBe(361));
  });

  it('test fetching character gender', async () => {
    await fetchingResults().then((results) => expect(results.results[0].gender).toEqual('Male'));
  });
});
