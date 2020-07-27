import React from 'react';
import styled from 'styled-components';
import NotificationIcon from './NotificationIcon';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Message = styled.p`
  margin: 16px;
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const NoResultsMessage = ({ text = 'Lo sentimos, no pudimos encontrar ningún resultado que coincida.', size = '32px', boxSize = 32 }) => {
  return (
    <Container>
      <NotificationIcon size={size} boxSize={boxSize} />
      <Message>{text}</Message>
    </Container>
  );
};

export default NoResultsMessage;
