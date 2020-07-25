import React from 'react';

import useToggle from '../hooks/useToggle';

import CubeLoader from '../components/CubeLoader';
import Layout from '../components/Layout';

const App = () => {
  const [isLoading, toogleLoading, setIsLoading] = useToggle(false);
  return (
    <Layout>
      {isLoading && <CubeLoader />}
    </Layout>
  );
};

export default App;
