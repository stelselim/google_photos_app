import {IAlbum} from '../@types/albums.types';
import {IMediaItemTypes} from '../@types/mediaItem.types';
import {IPhotoMediaItemTypes} from '../@types/photoMediaItem.types';

type TGetMediaItemsResponseTypes = {
  mediaItems: Array<IMediaItemTypes>;
  nextPageToken?: string;
};

type TGetAlbumsResponseTypes = {
  albums: Array<IAlbum>;
  nextPageToken?: string;
};

type TGetSharedAlbumsResponseTypes = {
  sharedAlbums: Array<IAlbum>;
  nextPageToken?: string;
};

type TPostMediaItemSearchTypes = {
  mediaItems: Array<IMediaItemTypes>;
  nextPageToken?: string;
};
type TGetAlbumsSearchTypes = {
  mediaItems: Array<IMediaItemTypes>;
  nextPageToken?: string;
};

export {
  TGetMediaItemsResponseTypes,
  TGetAlbumsResponseTypes,
  TGetSharedAlbumsResponseTypes,
  TPostMediaItemSearchTypes,
  TGetAlbumsSearchTypes,
};
