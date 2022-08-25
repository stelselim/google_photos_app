import {photoClient} from './client';
import {getTokens} from '../utils/getTokens';
import {IAlbum} from '../@types/albums.types';
import {IMediaItemTypes} from '../@types/mediaItem.types';

/**
 * Gets albums of user.
 *
 * @param pageSize numbers of albums to be fetched.
 * @param pageToken token to be fetched next elements provided by server.
 * @returns array of albums or empty array.
 * @returns token to be fetched next elements.
 */
const getAlbums = async ({
  pageToken,
  pageSize = '25',
}: {
  pageToken?: string;
  pageSize?: string;
} = {}): Promise<{albums: Array<IAlbum>; nextPageToken?: string}> => {
  try {
    const tokens = await getTokens();

    if (tokens === null) {
      return {
        albums: [],
      };
    }
    const client = await photoClient(tokens.accessToken);
    const res = await client.get('/albums', {
      params: {
        pageSize: pageSize,
        pageToken: pageToken,
      },
    });

    return {
      albums: res.data.albums,
      nextPageToken: res.data.nextPageToken,
    };
  } catch (error: any) {
    console.log(error);
    return {
      albums: [],
    };
  }
};
/**
 * Gets albums of user.
 *
 * @param pageSize numbers of albums to be fetched.
 * @param pageToken token to be fetched next elements provided by server.
 * @returns array of albums or empty array.
 * @returns token to be fetched next elements.
 */
const getSharedAlbums = async ({
  pageToken,
  pageSize = '25',
}: {
  pageToken?: string;
  pageSize?: string;
} = {}): Promise<{albums: Array<IAlbum>; nextPageToken?: string}> => {
  try {
    const tokens = await getTokens();

    if (tokens === null) {
      return {
        albums: [],
      };
    }
    const client = await photoClient(tokens.accessToken);
    const res = await client.get('/sharedAlbums', {
      params: {
        pageSize: pageSize,
        pageToken: pageToken,
      },
    });
    return {
      albums: res.data.sharedAlbums,
      nextPageToken: res.data.nextPageToken,
    };
  } catch (error: any) {
    console.log(error);
    return {
      albums: [],
    };
  }
};

/**
 * Gets library contents  of the user.
 *
 * @param pageSize numbers of contents to be fetched.
 * @param pageToken token to be fetched next elements provided by server.
 * @returns array of contents or empty array.
 * @returns token to be fetched next elements.
 */
const getLibraryContents = async ({
  pageToken,
  pageSize = '100',
}: {
  pageToken?: string;
  pageSize?: string;
} = {}): Promise<{
  contents: Array<IMediaItemTypes>;
  nextPageToken?: string;
}> => {
  try {
    const tokens = await getTokens();

    if (tokens === null) {
      return {
        contents: [],
      };
    }
    const client = await photoClient(tokens.accessToken);
    const res = await client.get('/mediaItems', {
      params: {
        pageSize: pageSize,
        pageToken: pageToken,
      },
    });
    return {
      contents: res.data.mediaItems,
      nextPageToken: res.data.nextPageToken,
    };
  } catch (error: any) {
    console.log(error);
    return {
      contents: [],
    };
  }
};
/**
 * Gets library contents  of the user.
 *
 * @param albumId album's id
 * @param pageSize numbers of contents to be fetched.
 * @param pageToken token to be fetched next elements provided by server.
 * @returns array of contents or empty array.
 * @returns token to be fetched next elements.
 */
const getAlbumsContent = async ({
  pageToken,
  albumId,
  pageSize = '100',
}: {
  pageToken?: string;
  albumId: string;
  pageSize?: string;
}): Promise<{
  contents: Array<IMediaItemTypes>;
  nextPageToken?: string;
}> => {
  try {
    const tokens = await getTokens();

    if (tokens === null) {
      return {
        contents: [],
      };
    }
    const client = await photoClient(tokens.accessToken);
    const res = await client.post('/mediaItems:search', {
      albumId: albumId,
      pageSize: pageSize,
      pageToken: pageToken,
    });
    return {
      contents: res.data.mediaItems,
      nextPageToken: res.data.nextPageToken,
    };
  } catch (error: any) {
    console.log(error);
    return {
      contents: [],
    };
  }
};

export {getAlbums, getSharedAlbums, getLibraryContents, getAlbumsContent};
