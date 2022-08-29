import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import {useAuth} from '../../../hooks/useAuth';
import {Photos} from '../Photos';

const Home = () => {
  const {signOut} = useAuth();

  return (
    <View>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={{marginTop: 20}}>
          <Button title="Log Out" onPress={signOut} />
        </View>
        <Photos />
      </SafeAreaView>
    </View>
  );
};

export default Home;
