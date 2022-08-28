import {User as GoogleUser} from '@react-native-google-signin/google-signin';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {authentication} from '../../../services/googleOauth';
import Home from '../../Views/Home';
import {Login} from '../../Views/Login';
import {
  PhotosIcon,
  AlbumsIcon,
  SharedAlbumsIcon,
  SearchIcon,
} from './Components/bottomTabBarIcons';
import {TabParamList, TLoginStackParamList} from './navigation.types';

const AppNav = () => {
  const [user, setUser] = useState<GoogleUser | null>(null);

  useEffect(() => {
    checkInitialUser();
  }, []);

  const checkInitialUser = async () => {
    const user = await authentication.checkSignIn();
    if (user) {
      setUser(user);
    }
  };

  return (
    <NavigationContainer>
      {!user ? <LoginStackComponent /> : <HomeTabComponent />}
    </NavigationContainer>
  );
};

export default AppNav;

const LoginStack = createNativeStackNavigator<TLoginStackParamList>();
const HomeTab = createBottomTabNavigator<TabParamList>();

const HomeTabComponent = () => {
  return (
    <HomeTab.Navigator initialRouteName="Photos">
      <HomeTab.Screen
        name="Photos"
        component={Home}
        options={{
          title: 'Photos',
          tabBarIcon: PhotosIcon,
        }}
      />
      <HomeTab.Screen
        name="Albums"
        component={Home}
        options={{
          title: 'Albums',
          tabBarIcon: AlbumsIcon,
        }}
      />
      <HomeTab.Screen
        name="SharedAlbums"
        component={Home}
        options={{
          title: 'Shared Albums',
          tabBarIcon: SharedAlbumsIcon,
        }}
      />
      <HomeTab.Screen
        name="Search"
        component={Home}
        options={{
          title: 'Search',
          tabBarIcon: SearchIcon,
        }}
      />
    </HomeTab.Navigator>
  );
};

const LoginStackComponent = () => {
  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{title: 'Login'}}
      />
    </LoginStack.Navigator>
  );
};
