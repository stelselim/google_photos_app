import {IVideoMediaItemTypes} from '../@types/videoMediaItem.types';

export const getVideoFileName = (mediaItem: IVideoMediaItemTypes): string => {
  const type = mediaItem.mimeType.split('/')[1];
  return `${mediaItem.id}.${type}`;
};
