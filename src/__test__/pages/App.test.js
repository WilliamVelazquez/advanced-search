import React from 'react';
import { shallow } from 'enzyme';
// import { create } from 'react-test-renderer';
import 'jest-styled-components';

import App from '../../pages/App';

describe('<App />', () => {
  const app = shallow(<App />);
  test('Rendering App Page Component', () => {
    expect(app.length).toEqual(1);
  });
});

// describe('App Snapshot', () => {
//   test('Verifying App Page Component UI', () => {
//     const app = create(<App />);
//     expect(app.toJSON()).toMatchSnapshot();
//   });
// });
