import React from 'react';
import {AuthProvider} from './src/hooks/useAuth';
import {AppServicesProvider} from './src/hooks/useServices';
import AppNav from './src/presentation/core/AppNav';

const App = () => {
  return (
    <AppServicesProvider>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </AppServicesProvider>
  );
};

export default App;
