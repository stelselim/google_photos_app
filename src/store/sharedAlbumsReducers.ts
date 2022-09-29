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
        addSharedAlbums: (state, action: PayloadAction<Array<IAlbum>>) => {
            action.payload.forEach((element) => {
                if (!state.albums.map(e => e.id).includes(element.id)) {
                    state.albums.push(element);
                }
            })
        },
        removeSharedAlbumsAll: (state) => {
            state.albums = [];
        },
    },
})

export const { addSharedAlbums, removeSharedAlbumsAll } = sharedAlbumsSlice.actions
export const selectLibraryContents = (state: RootState) => state.sharedAlbums.albums

export default sharedAlbumsSlice.reducer