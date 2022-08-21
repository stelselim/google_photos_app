import React from 'react';
import {
  GoogleSigninButton,
  User,
} from '@react-native-google-signin/google-signin';
import {authentication} from './../../../services/googleOauth';
import {StyleSheet, View} from 'react-native';

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

  return (
    <View style={styles.container}>
      <GoogleSigninButton onPress={onPress} />
    </View>
  );
};

export {SignInButton};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
