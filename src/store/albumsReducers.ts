import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IAlbum } from '../@types/albums.types';
import type { RootState } from './store';


/**
 * Albums
 */

interface IAlbumsState {
    albums: Array<IAlbum>;
}

const initialState: IAlbumsState = {
    albums: [],
}

export const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        addAlbums: (state, action: PayloadAction<Array<IAlbum>>) => {
            state.albums.push(...action.payload);
        },
        removeAll: (state) => {
            state.albums = [];
        },
    },
})

export const { addAlbums, removeAll } = albumsSlice.actions
export const selectLibraryContents = (state: RootState) => state.albums.albums

export default albumsSlice.reducer