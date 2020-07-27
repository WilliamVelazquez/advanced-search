/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg``;

const Path = styled.path`
  stroke-width: 0;
  stroke: ${(p) => p.color};
  fill: ${(p) => p.color};
`;

const NotificationIcon = (props) => {
  const { size = '1em', boxSize = 32, color = '#000000', className } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox={`0 0 ${boxSize} ${boxSize}`}
      {...props}
    >
      <g data-name='Notification'>
        <Path
          color={color}
          className={className}
          data-name='Notification-path'
          d='M16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM14 22h4v4h-4zM14 6h4v12h-4z'
        />
      </g>
    </Svg>
  );
};

export default NotificationIcon;
