import {Image} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';
import {IVideoMediaItemTypes} from '../../../../@types/videoMediaItem.types';
import {checkOrientationType} from '../../../../utils/checkOrientation';
import {getAspectRatio} from '../../../../utils/getAspectRatio';

//TODO:
// Request media item data as PhotoMediaItem or VideoMediaItem
// Video: Play,mute, stop... download to gallery.
const VideoMediaItem = ({mediaItem}: {mediaItem: IVideoMediaItemTypes}) => {
  const {width} = Dimensions.get('window');

  const orientation = checkOrientationType(
    Number.parseFloat(mediaItem.mediaMetadata.height),
    Number.parseFloat(mediaItem.mediaMetadata.width),
  );

  const aspectRatio = getAspectRatio(
    Number.parseFloat(mediaItem.mediaMetadata.height),
    Number.parseFloat(mediaItem.mediaMetadata.width),
  );

  if (orientation === 'Landscape') {
    return (
      <Image
        alt="media"
        source={{uri: mediaItem.baseUrl, cache: 'force-cache'}}
        height={aspectRatio * width}
        width={width}
      />
    );
  }

  return (
    <Image
      source={{uri: mediaItem.baseUrl, cache: 'force-cache'}}
      alt="media"
      width={width}
      height={width * aspectRatio}
    />
  );
};

export {VideoMediaItem};
