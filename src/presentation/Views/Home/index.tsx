import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {User as GoogleUser} from '@react-native-google-signin/google-signin';
import {authentication} from '../../../services/googleOauth';
import {SignInButton} from '../../Components/SignInButton';
import {Login} from '../Login';
import {Photos} from '../Photos';

const Home = () => {
  const [user, setUser] = useState<GoogleUser | null>(null);

  useEffect(() => {
    checkInitialUser();
  }, []);

  const checkInitialUser = async () => {
    try {
      const user = await authentication.checkSignIn();
      if (user) {
        setUser(user);
      }
    } catch (error) {
      console.log('Error in authentication.checkSignIn');
    }
  };

  if (user === null) {
    return (
      <SafeAreaView>
        <View style={{margin: 25}}>
          <Login />
          <SignInButton
            onSuccess={user => setUser(user)}
            onFail={error => {
              console.log('Error: ' + error);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{margin: 25}}>
        <Text style={{backgroundColor: 'aqua', margin: 25}}>
          User Email: {user?.user.email + '\n'}
          Name: {user?.user.name + '\n'}
          Surname: {user?.user.familyName + '\n'}
        </Text>
      </View>

      <Photos />

      <View style={{marginTop: 120}}>
        <Button
          title="Log Out"
          onPress={() => {
            authentication.signOut();
            setUser(null);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
