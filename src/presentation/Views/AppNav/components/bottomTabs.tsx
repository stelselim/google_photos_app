import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  TabParamList,
  TLoginStackParamList,
} from '../../../../@types/navigation.types';
import i18n from '../../../../utils/translations_utility';
import { Login } from '../../../views/Login';
import {
  AlbumsIcon,
  PhotosIcon,
  SearchIcon,
  SharedAlbumsIcon,
} from './bottomTabBarIcons';
import { Photos } from '../../Photos';
import { Albums } from '../../Albums';
import { SharedAlbums } from '../../SharedAlbums';
import { Search } from '../../Search';
import { ProfileAvatar } from '../../../components/ProfileAvatar';

const LoginStack = createNativeStackNavigator<TLoginStackParamList>();
const HomeTab = createBottomTabNavigator<TabParamList>();

export const HomeTabComponent = () => {
  return (
    <HomeTab.Navigator initialRouteName="Photos">
      <HomeTab.Screen
        name="Photos"
        component={Photos}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('photos_bottom_tab_bar_title'),
          tabBarIcon: PhotosIcon,
        }}
      />
      <HomeTab.Screen
        name="Albums"
        component={Albums}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('albums_bottom_tab_bar_title'),
          tabBarIcon: AlbumsIcon,
        }}
      />
      <HomeTab.Screen
        name="SharedAlbums"
        component={SharedAlbums}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('shared_albums_bottom_tab_bar_title'),
          tabBarIcon: SharedAlbumsIcon,
        }}
      />
      <HomeTab.Screen
        name="Search"
        component={Search}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('search_bottom_tab_bar_title'),
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
        options={{ title: i18n.t('login_screen_app_bar_title') }}
      />
    </LoginStack.Navigator>
  );
};
