
import React from 'react';
import { AuthProvider } from './src/hooks/useAuth';
import { AppServicesProvider } from './src/hooks/useServices';
import AppNav from './src/presentation/views/AppNav';
import { NativeBaseProvider } from 'native-base';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <AuthProvider>
      <AppServicesProvider>
        <NativeBaseProvider>
          <BottomSheetModalProvider>
            <AppNav />
          </BottomSheetModalProvider>
        </NativeBaseProvider>
      </AppServicesProvider>
    </AuthProvider>
  );
};

export default App;
