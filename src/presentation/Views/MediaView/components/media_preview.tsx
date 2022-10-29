import {Image} from 'native-base';
import React from 'react';
import {Dimensions, useWindowDimensions} from 'react-native';
import {IMediaItemTypes} from '../../../../@types/mediaItem.types';
import {getAspectRatio} from '../../../../utils/getAspectRatio';

const MediaPreview = ({mediaItem}: {mediaItem: IMediaItemTypes}) => {
  const {width} = useWindowDimensions();

  const aspectRatio = getAspectRatio(
    Number.parseFloat(mediaItem.mediaMetadata.height),
    Number.parseFloat(mediaItem.mediaMetadata.width),
  );

  return (
    <Image
      source={{uri: mediaItem.baseUrl, cache: 'force-cache'}}
      alt="media"
      width={width}
      height={width * aspectRatio}
    />
  );
};

export {MediaPreview};
