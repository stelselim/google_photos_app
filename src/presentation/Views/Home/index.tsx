import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import {authentication} from '../../../services/googleOauth';
import {Photos} from '../Photos';

const Home = () => {
  return (
    <View>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Button
          title="Navigate Login"
          onPress={() => {
            // navigation.navigate('Login');
          }}
        />
        <Photos />

        <View style={{marginTop: 20}}>
          <Button
            title="Log Out"
            onPress={() => {
              authentication.signOut();
              // setUser(null);
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
