import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import Header from '../../components/Header';

describe('<Header />', () => {
  const header = mount(<Header />);
  test('Rendering Header Component', () => {
    expect(header.length).toEqual(1);
  });
});

describe('Header Snapshot', () => {
  test('Verifying Header Component UI', () => {
    const header = create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});
