import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {Platform} from 'react-native';
import RNFS from 'react-native-fs';
import {IVideoMediaItemTypes} from '../../@types/videoMediaItem.types';
import {getVideoMediaItemHeader} from '../../client/photos';
import {getVideoFileName} from '../../utils/getVideoFileName';
import {hasAndroidPermission, hasiOSPermission} from '../permissionService';

export const saveVideoLocally = async ({
  mediaItem,
  onComplete,
  onFail,
}: {
  mediaItem: IVideoMediaItemTypes;
  onComplete: () => void;
  onFail: () => void;
}) => {
  const videoHeader = await getVideoMediaItemHeader();
  const videoFileName = getVideoFileName(mediaItem);
  const fileExist = await RNFS.exists(
    `${RNFS.DocumentDirectoryPath}/${videoFileName}`,
  );
  if (fileExist) {
    onComplete();
    return;
  }
  const promise = RNFS.downloadFile({
    fromUrl: mediaItem.baseUrl + '=dv',
    headers: {
      ...videoHeader,
    },
    toFile: `${RNFS.DocumentDirectoryPath}/${videoFileName}`,
  }).promise;

  const res = await promise;

  if (res.statusCode === 200) {
    onComplete();
    return;
  }
  onFail();
};

/**
 * Saves a video to the user's gallery.
 * @param media
 * @returns
 */
async function saveVideo(media: IVideoMediaItemTypes): Promise<boolean> {
  try {
    let downloaded = false;
    await saveVideoLocally({
      mediaItem: media,
      onComplete: () => {
        downloaded = true;
      },
      onFail: () => {
        downloaded = false;
      },
    });

    if (downloaded) {
      const videoFileName = getVideoFileName(media);

      if (Platform.OS === 'android' && (await hasAndroidPermission())) {
        const tag = `file://${RNFS.DocumentDirectoryPath}/${videoFileName}`;
        await CameraRoll.save(tag, {
          type: 'video',
        });
      } else if (Platform.OS === 'ios' && (await hasiOSPermission())) {
        const tag = `file://${RNFS.DocumentDirectoryPath}/${videoFileName}`;
        await CameraRoll.save(tag, {
          type: 'video',
        });
      }
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export {saveVideo};
