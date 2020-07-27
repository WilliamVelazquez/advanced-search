/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';

import useToggle from '../hooks/useToggle';

import CubeLoader from '../components/CubeLoader';
import Layout from '../components/Layout';
import SearchGroup from '../components/SearchGroup';

const App = (props) => {
  const [isLoading, toogleLoading, setIsLoading] = useToggle(false);
  return (
    <Layout>
      {isLoading && <CubeLoader />}
      <ReactiveBase
        app={process.env.APPS || ''}
        credentials={process.env.CREDENTIALS || ''}
        url={process.env.CLUSTER_URL || ''}
      >
        <SearchGroup />
      </ReactiveBase>
    </Layout>
  );
};

export default App;
