import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {useServices} from '../../../hooks/useServices';
import {Splash} from '../../views/Splash';
import {HomeTabComponent, LoginStackComponent} from './Components/bottomTabs';

const AppNav = () => {
  const {isSignedIn, initiliazing} = useAuth();
  const {loading} = useServices();

  if (loading || initiliazing) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {!isSignedIn ? <LoginStackComponent /> : <HomeTabComponent />}
    </NavigationContainer>
  );
};

export default AppNav;
