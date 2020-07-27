import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import CubeLoader from '../../components/CubeLoader';

describe('<CubeLoader />', () => {
  const cubeLoader = mount(<CubeLoader />);
  test('Rendering CubeLoader Component', () => {
    expect(cubeLoader.length).toEqual(1);
  });
});

describe('CubeLoader Snapshot', () => {
  test('Verifying CubeLoader Component UI', () => {
    const cubeLoader = create(<CubeLoader />);
    expect(cubeLoader.toJSON()).toMatchSnapshot();
  });
});
