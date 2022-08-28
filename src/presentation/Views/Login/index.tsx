import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SignInButton} from '../../Components/SignInButton';
import {User as GoogleUser} from '@react-native-google-signin/google-signin';

const Login = () => {
  return (
    <SafeAreaView>
      <View style={{margin: 25}}>
        <SignInButton
          onSuccess={user => {
            // setUser(user);
          }}
          onFail={error => {
            console.log('Error: ' + error);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export {Login};
