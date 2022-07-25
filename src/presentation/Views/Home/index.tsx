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
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={{margin: 25}}>
          <Text style={{backgroundColor: 'aqua', margin: 25}}>
            User Email: {user?.user.email + '\n'}
            Name: {user?.user.name + '\n'}
            Surname: {user?.user.familyName + '\n'}
          </Text>
        </View>

        <Button
          title="Log Out"
          onPress={() => {
            authentication.signOut();
            setUser(null);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
