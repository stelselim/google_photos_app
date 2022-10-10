import {PermissionsAndroid, Platform} from 'react-native';
import {
  CameraRoll,
  iosRequestAddOnlyGalleryPermission,
} from '@react-native-camera-roll/camera-roll';
import RNFS from 'react-native-fs';
import {IPhotoMediaItemTypes} from '../../@types/photoMediaItem.types';

async function hasiOSPermission(): Promise<boolean> {
  const hasPermission = await iosRequestAddOnlyGalleryPermission();
  if (hasPermission === 'granted' || hasPermission === 'limited') {
    return true;
  }
  return false;
}

async function hasAndroidPermission(): Promise<boolean> {
  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    return true;
  }

  const status = await PermissionsAndroid.request(permission);
  return status === 'granted';
}

export {hasiOSPermission, hasAndroidPermission};
