import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import NotificationIcon from '../../components/NotificationIcon';

describe('<NotificationIcon />', () => {
  const notificationIcon = mount(<NotificationIcon />);
  test('Rendering NotificationIcon Component', () => {
    expect(notificationIcon.length).toEqual(1);
  });
});

describe('NotificationIcon Snapshot', () => {
  test('Verifying NotificationIcon Component UI', () => {
    const notificationIcon = create(<NotificationIcon />);
    expect(notificationIcon.toJSON()).toMatchSnapshot();
  });
});
