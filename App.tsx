import React from 'react';
import {Provider} from 'react-redux';
import {AuthProvider} from './src/hooks/useAuth';
import {AppServicesProvider} from './src/hooks/useServices';
import AppNav from './src/presentation/views/AppNav';
import {NativeBaseProvider} from 'native-base';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {store} from './src/store/store';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <AppServicesProvider>
          <NativeBaseProvider>
            <BottomSheetModalProvider>
              <AppNav />
            </BottomSheetModalProvider>
          </NativeBaseProvider>
        </AppServicesProvider>
      </AuthProvider>
      <Toast />
    </Provider>
  );
};

export default App;
