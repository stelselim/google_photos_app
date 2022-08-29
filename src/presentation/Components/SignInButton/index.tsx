import React from 'react';
import {
  GoogleSigninButton,
  User,
} from '@react-native-google-signin/google-signin';
import {authentication} from './../../../services/googleOauth';
import {StyleSheet, View} from 'react-native';
import {useAuth} from '../../../hooks/useAuth';

const SignInButton = () => {
  const {signIn} = useAuth();

  return (
    <View style={styles.container}>
      <GoogleSigninButton onPress={signIn} />
    </View>
  );
};

export {SignInButton};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
