import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GoogleOAuthConfiguration} from './config';
import {checkSignIn, signIn, signOut} from './authMethods';

const configureGoogleSignIn = () => {
  GoogleSignin.configure(GoogleOAuthConfiguration);
};

export {configureGoogleSignIn};

export const authentication = {
  checkSignIn,
  signIn,
  signOut,
};
