import {PermissionsAndroid, Platform} from 'react-native';
import {
  CameraRoll,
  iosRequestAddOnlyGalleryPermission,
} from '@react-native-camera-roll/camera-roll';
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

async function savePicture(media: IPhotoMediaItemTypes): Promise<boolean> {
  try {
    if (Platform.OS === 'android' && (await hasAndroidPermission())) {
      const tag = ''; //TODO:
      await CameraRoll.save(media.description, {
        type: 'photo',
      });
    } else if (Platform.OS === 'ios' && (await hasiOSPermission())) {
      const tag = media.baseUrl;
      await CameraRoll.save(tag, {
        type: 'photo',
      });
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export {savePicture};
