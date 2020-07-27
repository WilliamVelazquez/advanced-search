/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';

const ProviderMock = (props) => {
  const { children } = props;
  return (
    <ReactiveBase
      app='users,sources,boards,reconciliations' //{process.env.APPS}
      credentials={process.env.CREDENTIALS}
      url={process.env.CLUSTER_URL}
    >
      { children }
    </ReactiveBase>
  );
};

export default ProviderMock;
