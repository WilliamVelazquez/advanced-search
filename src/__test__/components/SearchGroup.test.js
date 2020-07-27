import React from 'react';
import { shallow } from 'enzyme';
// import { create } from 'react-test-renderer';
import 'jest-styled-components';

import ProviderMock from '../../__mocks__/ProviderMock';
import SearchGroup from '../../components/SearchGroup';

describe('<SearchGroup />', () => {
  const searchGroup = shallow(
    <ProviderMock>
      <SearchGroup />
    </ProviderMock>,
  );
  test('Rendering SearchGroup Component', () => {
    expect(searchGroup.length).toEqual(1);
  });
});

// describe('SearchGroup Snapshot', () => {
//   test('Verifying SearchGroup Component UI', () => {
//     const searchGroup = create(<SearchGroup />);
//     expect(searchGroup.toJSON()).toMatchSnapshot();
//   });
// });
