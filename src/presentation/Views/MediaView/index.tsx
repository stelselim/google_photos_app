import {RouteProp, useRoute} from '@react-navigation/native';
import {Box, Center, Heading, Image, View, ZStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  IAlbumsStackParamList,
  IPhotosStackParamList,
  ISearchStackParamList,
  ISharedAlbumsStackParamList,
} from '../../../@types/navigation.types';
import {IPhotoMediaItemTypes} from '../../../@types/photoMediaItem.types';
import {IVideoMediaItemTypes} from '../../../@types/videoMediaItem.types';
import {getPhotoMediaItem, getVideoMediaItem} from '../../../client/photos';
import {checkMediaType, MediaType} from '../../../utils/checkMediaType';
import {CircularLoader} from '../../components/CircularLoader';
import {MediaPreview} from './components/media_preview';
import {PhotoMediaItem} from './components/photo_media_item';
import {VideoMediaItem} from './components/video_media_item';

const MediaView = () => {
  const route =
    useRoute<
      RouteProp<
        | IPhotosStackParamList
        | ISharedAlbumsStackParamList
        | IAlbumsStackParamList
        | ISearchStackParamList,
        'MediaView'
      >
    >();

  const mediaItem = route.params.mediaItem;
  const [extededMediaItem, setExtendedMediaItem] = useState<
    IVideoMediaItemTypes | IPhotoMediaItemTypes | null
  >(null);

  const typeOfMedia = checkMediaType(mediaItem.mimeType);

  const getMedia = async () => {
    if (typeOfMedia === 'Photo') {
      const res = await getPhotoMediaItem({
        mediaId: mediaItem.id,
      });
      setExtendedMediaItem(res);
    } else {
      const res = await getVideoMediaItem({
        mediaId: mediaItem.id,
      });
      setExtendedMediaItem(res);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  /// If Media is loading, Show MediaPreview
  if (extededMediaItem === null) {
    return (
      <View flex={1} alignItems="center" justifyContent={'center'}>
        <ZStack alignItems="center" justifyContent="center">
          <MediaPreview mediaItem={mediaItem} />
          <Center zIndex={3}>
            <CircularLoader color="black" size="lg" />
          </Center>
        </ZStack>
      </View>
    );
  } else if (typeOfMedia === 'Photo') {
    return (
      <View flex={1} alignItems="center" justifyContent={'center'}>
        <PhotoMediaItem mediaItem={extededMediaItem as IPhotoMediaItemTypes} />
      </View>
    );
  } else {
    return (
      <View flex={1} alignItems="center" justifyContent={'center'}>
        <VideoMediaItem mediaItem={extededMediaItem as IVideoMediaItemTypes} />
      </View>
    );
  }
};

export {MediaView};
