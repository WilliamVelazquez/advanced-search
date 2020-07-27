import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import NoResultsMessage from '../../components/NoResultsMessage';

describe('<NoResultsMessage />', () => {
  const noResultsMessage = mount(<NoResultsMessage />);
  test('Rendering NoResultsMessage Component', () => {
    expect(noResultsMessage.length).toEqual(1);
  });
});

describe('NoResultsMessage Snapshot', () => {
  test('Verifying NoResultsMessage Component UI', () => {
    const noResultsMessage = create(<NoResultsMessage />);
    expect(noResultsMessage.toJSON()).toMatchSnapshot();
  });
});
