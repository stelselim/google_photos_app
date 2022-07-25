import React from 'react';
import {
  GoogleSigninButton,
  User,
} from '@react-native-google-signin/google-signin';
import {authentication} from './../../../services/googleOauth';

interface Props {
  onSuccess(user: User): void;
  onFail(error: string): void;
}

const SignInButton = ({onSuccess, onFail}: Props) => {
  const onPress = async () => {
    const res = await authentication.signIn();
    if (typeof res !== 'string') {
      return onSuccess(res);
    }
    onFail(res);
  };

  return <GoogleSigninButton onPress={onPress} />;
};

export {SignInButton};
