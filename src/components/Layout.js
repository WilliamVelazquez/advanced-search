import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styled/GlobalStyles';
import Header from './Header';

import LOGO from '../assets/images/logo.svg';

const Content = styled.div`
  padding: 1em;
  padding-top: 110px;
`;

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <GlobalStyles />
      <Header logo={LOGO} logoAlt='Simetrik Logo' />
      <Content>
        {
          children
        }
      </Content>
    </>
  );
};

export default Layout;
