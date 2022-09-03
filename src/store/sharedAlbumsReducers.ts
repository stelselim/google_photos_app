import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IAlbum } from '../@types/albums.types';
import type { RootState } from './store';


/**
 * Shared Albums
 */

interface ISharedAlbumsState {
    albums: Array<IAlbum>;
}

const initialState: ISharedAlbumsState = {
    albums: [],
}

export const sharedAlbumsSlice = createSlice({
    name: 'sharedAlbums',
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

export const { addAlbums, removeAll } = sharedAlbumsSlice.actions
export const selectLibraryContents = (state: RootState) => state.sharedAlbums.albums

export default sharedAlbumsSlice.reducer