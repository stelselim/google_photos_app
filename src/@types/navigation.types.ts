import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Login Stack
export type TLoginScreenParamsList = {};

export type TLoginStackParamList = {
  Login: TLoginScreenParamsList;
};

export type TLoginRootStackProps = NativeStackNavigationProp<
  TLoginStackParamList,
  'Login'
>;

// Tab Bar
export type TabParamList = {
  Photos: undefined;
  Albums: undefined;
  SharedAlbums: undefined;
  Search: undefined;
};
