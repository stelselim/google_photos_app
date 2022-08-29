import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  TabParamList,
  TLoginStackParamList,
} from '../../../../@types/navigation.types';
import Home from '../../../views/Home';
import {Login} from '../../../views/Login';
import {
  AlbumsIcon,
  PhotosIcon,
  SearchIcon,
  SharedAlbumsIcon,
} from './bottomTabBarIcons';
const LoginStack = createNativeStackNavigator<TLoginStackParamList>();
const HomeTab = createBottomTabNavigator<TabParamList>();

export const HomeTabComponent = () => {
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

export const LoginStackComponent = () => {
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
