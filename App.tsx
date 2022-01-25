import React, {Suspense} from 'react';
import {View} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <Suspense fallback={<View />}>
      <AppNavigation />
    </Suspense>
  );
};

export default App;
