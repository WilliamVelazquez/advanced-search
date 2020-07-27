import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import Layout from '../../components/Layout';

describe('<Layout />', () => {
  const layout = mount(<Layout />);
  test('Rendering Layout Component', () => {
    expect(layout.length).toEqual(1);
  });
});

describe('Layout Snapshot', () => {
  test('Verifying Layout Component UI', () => {
    const layout = create(<Layout />);
    expect(layout.toJSON()).toMatchSnapshot();
  });
});
