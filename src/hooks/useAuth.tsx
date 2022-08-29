import React, {createContext, useContext, useEffect, useState} from 'react';
import {User as GoogleUser} from '@react-native-google-signin/google-signin';
import {authentication} from '../services/googleOauth';
import {checkSignIn} from '../services/googleOauth/authMethods';

export type TAuthContextType = {
  user: GoogleUser | null;
  initiliazing: boolean;
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const useAuth = () => {
  return useContext(authContext);
};

export function AuthProvider({children}: {children: JSX.Element}) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

const authContext = createContext<TAuthContextType>({
  user: null,
  isSignedIn: false,
  initiliazing: true,
  signIn: () => {
    throw new Error('context is missing');
  },
  signOut: () => {
    throw new Error('context is missing');
  },
});

interface TUseProvideAuthStates {
  user: GoogleUser | null;
  initiliazing: boolean;
}

const useProvideAuth = (): TAuthContextType => {
  const [authState, setAuthState] = useState<TUseProvideAuthStates>({
    initiliazing: false,
    user: null,
  });

  useEffect(() => {
    checkInitialUser();
  }, []);

  const checkInitialUser = async () => {
    setAuthState({
      initiliazing: true,
      user: null,
    });
    const user = await checkSignIn();
    if (user) {
      setAuthState({
        initiliazing: false,
        user: user,
      });
    } else {
      setAuthState({
        initiliazing: false,
        user: null,
      });
    }
  };

  const signIn = async () => {
    const user = await authentication.signIn();
    if (typeof user !== 'string') {
      setAuthState({
        initiliazing: false,
        user: user,
      });
    }
  };

  const signOut = async () => {
    await authentication.signOut();
    setAuthState({
      initiliazing: false,
      user: null,
    });
  };

  return {
    user: authState.user,
    initiliazing: authState.initiliazing,
    isSignedIn: authState.user !== null,
    signIn,
    signOut,
  };
};
