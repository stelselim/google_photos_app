import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {SignInButton} from '../../components/SignInButton';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={{margin: 25}}>
        <SignInButton />
      </View>
    </SafeAreaView>
  );
};

export {Login};
