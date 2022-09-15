import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  IAlbumsStackParamList,
  IPhotosStackParamList,
  ISearchStackParamList,
  ISharedAlbumsStackParamList,
  TabParamList,
  TLoginStackParamList,
} from '../../../../@types/navigation.types';
import i18n from '../../../../utils/translations_utility';
import {Login} from '../../../views/Login';
import {
  AlbumsIcon,
  PhotosIcon,
  SearchIcon,
  SharedAlbumsIcon,
} from './bottomTabBarIcons';
import {Photos} from '../../Photos';
import {Albums} from '../../Albums';
import {SharedAlbums} from '../../SharedAlbums';
import {Search} from '../../Search';
import {ProfileAvatar} from '../../../components/ProfileAvatar';
import {MediaView} from '../../MediaView';

// Stacks
const LoginStack = createNativeStackNavigator<TLoginStackParamList>();
const PhotoStack = createNativeStackNavigator<IPhotosStackParamList>();
const AlbumsStack = createNativeStackNavigator<IAlbumsStackParamList>();
const SharedAlbumsStack =
  createNativeStackNavigator<ISharedAlbumsStackParamList>();
const SearchStack = createNativeStackNavigator<ISearchStackParamList>();

// Tabs
const HomeTab = createBottomTabNavigator<TabParamList>();

const PhotoStackComponent = () => {
  return (
    <PhotoStack.Navigator initialRouteName="Photos">
      <PhotoStack.Screen
        name="Photos"
        component={Photos}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('photos_bottom_tab_bar_title'),
        }}
      />
      <PhotoStack.Screen
        name="MediaView"
        options={{
          title: i18n.t('media_view_header_title'),
        }}
        component={MediaView}
      />
    </PhotoStack.Navigator>
  );
};

const AlbumStackComponent = () => {
  return (
    <AlbumsStack.Navigator initialRouteName="Albums">
      <AlbumsStack.Screen
        name="Albums"
        component={Albums}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('albums_bottom_tab_bar_title'),
        }}
      />
      <AlbumsStack.Screen
        name="MediaView"
        options={{
          title: i18n.t('media_view_header_title'),
        }}
        component={MediaView}
      />
    </AlbumsStack.Navigator>
  );
};

const SharedAlbumsStackComponent = () => {
  return (
    <SharedAlbumsStack.Navigator initialRouteName="SharedAlbums">
      <SharedAlbumsStack.Screen
        name="SharedAlbums"
        component={SharedAlbums}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('shared_albums_bottom_tab_bar_title'),
        }}
      />
      <SharedAlbumsStack.Screen
        name="MediaView"
        options={{
          title: i18n.t('media_view_header_title'),
        }}
        component={MediaView}
      />
    </SharedAlbumsStack.Navigator>
  );
};

const SearchStackComponent = () => {
  return (
    <SearchStack.Navigator initialRouteName="Search">
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          headerRight: ProfileAvatar,
          title: i18n.t('search_bottom_tab_bar_title'),
        }}
      />
      <SearchStack.Screen
        name="MediaView"
        options={{
          title: i18n.t('media_view_header_title'),
        }}
        component={MediaView}
      />
    </SearchStack.Navigator>
  );
};

export const HomeTabComponent = () => {
  return (
    <HomeTab.Navigator initialRouteName="PhotoStack">
      <HomeTab.Screen
        name="PhotoStack"
        component={PhotoStackComponent}
        options={{
          headerShown: false,
          title: i18n.t('photos_bottom_tab_bar_title'),
          tabBarIcon: PhotosIcon,
        }}
      />
      <HomeTab.Screen
        name="AlbumsStack"
        component={AlbumStackComponent}
        options={{
          headerShown: false,
          title: i18n.t('albums_bottom_tab_bar_title'),
          tabBarIcon: AlbumsIcon,
        }}
      />
      <HomeTab.Screen
        name="SharedAlbumsStack"
        component={SharedAlbumsStackComponent}
        options={{
          headerShown: false,
          title: i18n.t('shared_albums_bottom_tab_bar_title'),
          tabBarIcon: SharedAlbumsIcon,
        }}
      />
      <HomeTab.Screen
        name="SearchStack"
        component={SearchStackComponent}
        options={{
          headerShown: false,
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
        options={{title: i18n.t('login_screen_app_bar_title')}}
      />
    </LoginStack.Navigator>
  );
};
