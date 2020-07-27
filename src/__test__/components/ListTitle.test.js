import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import ListTitle from '../../components/ListTitle';

describe('<ListTitle />', () => {
  const listTitle = mount(<ListTitle />);
  test('Rendering ListTitle Component', () => {
    expect(listTitle.length).toEqual(1);
  });
});

describe('ListTitle Snapshot', () => {
  test('Verifying ListTitle Component UI', () => {
    const listTitle = create(<ListTitle />);
    expect(listTitle.toJSON()).toMatchSnapshot();
  });
});
