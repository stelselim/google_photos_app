import React from 'react';
import {
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { useAuth } from '../../../hooks/useAuth';
import { Dimensions } from 'react-native';

const SignInButton = () => {
  const { signIn } = useAuth();
  const {width} = Dimensions.get("screen");

  return (
    <GoogleSigninButton style={{ width: width * 0.5 }} onPress={signIn} />
  );
};

export { SignInButton };

