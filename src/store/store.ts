import {configureStore} from '@reduxjs/toolkit';
import albumsReducers from './albumsReducers';
import libraryContentReducer from './libraryContentReducers';
import searchContentReducer from './searchReducers';
import sharedAlbumsReducers from './sharedAlbumsReducers';

export const store = configureStore({
  reducer: {
    searchContents: searchContentReducer,
    libraryContents: libraryContentReducer,
    albums: albumsReducers,
    sharedAlbums: sharedAlbumsReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
