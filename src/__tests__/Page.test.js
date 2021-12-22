import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import store from '../__mocks__/configureStore';
import Page from '../Components/Page';

describe('App page is working fine', () => {
  test('renders App', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
