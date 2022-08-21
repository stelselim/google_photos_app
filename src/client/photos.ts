import {photoClient} from './clients';
import {getTokens} from '../utils/getTokens';
import {Album} from '../@types/albums.types';

const listAlbums = async (): Promise<Array<Album> | []> => {
  try {
    const tokens = await getTokens();

    if (tokens === null) {
      return [];
    }
    const client = await photoClient(tokens.accessToken);
    const res = await client.get('/albums');
    console.log(res.data.albums);
    return res.data.albums;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};

export {listAlbums};
