import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Platform} from 'react-native';
import RNFS from 'react-native-fs';
import {IPhotoMediaItemTypes} from '../../@types/photoMediaItem.types';
import {hasAndroidPermission, hasiOSPermission} from '../permissionService';

async function savePicture(media: IPhotoMediaItemTypes): Promise<boolean> {
  try {
    if (Platform.OS === 'android' && (await hasAndroidPermission())) {
      const tag = `${RNFS.DocumentDirectoryPath}/${media.filename}`;
      await RNFS.downloadFile({
        fromUrl: media.baseUrl,
        toFile: tag,
      }).promise;
      await CameraRoll.save(tag, {
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
