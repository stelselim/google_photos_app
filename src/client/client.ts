import axios, {AxiosInstance} from 'axios';

const photoClient = async (accessToken: string): Promise<AxiosInstance> => {
  return axios.create({
    headers: {
      accept: 'application/json',
      authorization: 'Bearer ' + accessToken,
    },
    baseURL: 'https://photoslibrary.googleapis.com/v1',
  });
};

export {photoClient};
