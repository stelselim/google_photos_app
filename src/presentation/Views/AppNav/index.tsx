import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../../../hooks/useAuth';
import { useServices } from '../../../hooks/useServices';
import { Splash } from '../../views/Splash';
import { LoadingScreen } from '../LoadingScreen';
import { HomeTabComponent, LoginStackComponent } from './components/bottomTabs';

const AppNav = () => {
  const { isSignedIn, initiliazing } = useAuth();
  const { loading } = useServices();

  if (loading) {
    return <Splash />;
  }

  if (initiliazing) {
    return <LoadingScreen />
  }

  return (
    <NavigationContainer>
      {!isSignedIn ? <LoginStackComponent /> : <HomeTabComponent />}
    </NavigationContainer>
  );
};

export default AppNav;
