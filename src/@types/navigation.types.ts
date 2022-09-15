import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IMediaItemTypes} from './mediaItem.types';

// Login Stack
export type TLoginScreenParamsList = {};

export type TLoginStackParamList = {
  Login: TLoginScreenParamsList;
};

// Photo Stack Navigation Props
export type TLoginRootStackProps = NativeStackNavigationProp<
  TLoginStackParamList,
  'Login'
>;

/*------------------------------------------------------*/

/// Photo Stack
export type TPhotosScreenParamsList = {};
export type TMediaViewScreenParamsList = {
  mediaItem: IMediaItemTypes;
};

export type IPhotosStackParamList = {
  Photos: TPhotosScreenParamsList;
  MediaView: TMediaViewScreenParamsList;
};

// Photo Stack Navigation Props
export type TPhotoStackPhotosProps = NativeStackNavigationProp<
  IPhotosStackParamList,
  'Photos'
>;

export type TPhotoStackMediaViewProps = NativeStackNavigationProp<
  IPhotosStackParamList,
  'MediaView'
>;

/*------------------------------------------------------*/

/// Albums Stack
export type TAlbumsParamsList = {};

export type IAlbumsStackParamList = {
  Albums: TAlbumsParamsList;
  MediaView: TMediaViewScreenParamsList;
};

// Albums Stack Navigation Props
export type TAlbumsStackAlbumsProps = NativeStackNavigationProp<
  IAlbumsStackParamList,
  'Albums'
>;

export type TAlbumsStackMediaViewProps = NativeStackNavigationProp<
  IAlbumsStackParamList,
  'MediaView'
>;

/*------------------------------------------------------*/

/// Shared Albums Stack
export type TSharedAlbumsParamsList = {};

export type ISharedAlbumsStackParamList = {
  SharedAlbums: TSharedAlbumsParamsList;
  MediaView: TMediaViewScreenParamsList;
};

// Albums Stack Navigation Props
export type TSharedAlbumsStackSharedAlbumsProps = NativeStackNavigationProp<
  ISharedAlbumsStackParamList,
  'SharedAlbums'
>;

export type TSharedAlbumsStackMediaViewProps = NativeStackNavigationProp<
  ISharedAlbumsStackParamList,
  'MediaView'
>;

/*------------------------------------------------------*/

// Search Stack
export type TSearchParamsList = {};

export type ISearchStackParamList = {
  Search: TSearchParamsList;
  MediaView: TMediaViewScreenParamsList;
};

// Albums Stack Navigation Props
export type TSearchStackSeachProps = NativeStackNavigationProp<
  ISearchStackParamList,
  'Search'
>;

export type TSearchStackMediaViewProps = NativeStackNavigationProp<
  ISearchStackParamList,
  'MediaView'
>;

// Tab Bar
export type TabParamList = {
  PhotoStack: undefined;
  AlbumsStack: undefined;
  SharedAlbumsStack: undefined;
  SearchStack: undefined;
};
