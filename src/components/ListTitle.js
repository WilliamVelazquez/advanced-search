import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 24px;
  position: relative;
  padding-bottom: 2px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 40%;
    height: 4px;
    background: ${(props) => props.lineColor};
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ListTitle = (props) => {
  const { title = '', color = '#3c75ff', lineColor = '#3c75ff' } = props;
  return <Title color={color} lineColor={lineColor}>{title}</Title>;
};

export default ListTitle;
