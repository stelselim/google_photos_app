import React, {createContext, useContext, useEffect, useState} from 'react';
import {initiliazeServices} from '../services';

export type TUseServicesTypes = {
  loading: boolean;
};

export const useServices = (): TUseServicesTypes => {
  return useContext(AppServicesContext);
};

export const AppServicesProvider = ({children}: {children: JSX.Element}) => {
  const appServices = useProvideAppServices();
  return (
    <AppServicesContext.Provider value={appServices}>
      {children}
    </AppServicesContext.Provider>
  );
};

const AppServicesContext = createContext<TUseServicesTypes>({
  loading: false,
});

const useProvideAppServices = (): TUseServicesTypes => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      await initiliazeServices();
    } catch (error) {
      console.log('Error in initiliazeServices ' + error);
    }
    setLoading(false);
  };

  return {
    loading,
  };
};
