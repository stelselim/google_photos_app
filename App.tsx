import React, {useEffect, useState} from 'react';
import AppNav from './src/presentation/Core/AppNav';
import {Splash} from './src/presentation/Views/Splash';
import {initiliazeServices} from './src/services';

const App = () => {
  const [loading, setLoading] = useState(true);

  const init = async () => {
    try {
      initiliazeServices();
    } catch (error) {
      console.log('Error in App-init: ' + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <Splash />;
  }

  return <AppNav />;
};

export default App;
