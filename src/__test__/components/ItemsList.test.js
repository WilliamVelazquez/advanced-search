import React from 'react';
import { mount } from 'enzyme';
// import { create } from 'react-test-renderer';
import 'jest-styled-components';

import ItemsList from '../../components/ItemsList';

describe('<ItemsList />', () => {
  const itemsList = mount(<ItemsList />);
  test('Rendering ItemsList Component', () => {
    expect(itemsList.length).toEqual(1);
  });
});

// describe('ItemsList Snapshot', () => {
//   test('Verifying ItemsList Component UI', () => {
//     const itemsList = create(<ItemsList />);
//     expect(itemsList.toJSON()).toMatchSnapshot();
//   });
// });
