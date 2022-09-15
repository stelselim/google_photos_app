import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IMediaItemTypes } from '../@types/mediaItem.types';
import type { RootState } from './store';


/**
 * Library Contents
 */

interface ILibraryContentState {
    contents: Array<IMediaItemTypes>;
}

const initialState: ILibraryContentState = {
    contents: [],
}

export const libraryContentSlice = createSlice({
    name: 'libraryContent',
    initialState,
    reducers: {
        addContents: (state, action: PayloadAction<Array<IMediaItemTypes>>) => {
            action.payload.forEach((element) => {
                if (!state.contents.map(e=>e.id).includes(element.id)) {
                    state.contents.push(element);
                }
            })
        },
        removeAll: (state) => {
            state.contents = [];
        },
    },
})

export const { addContents, removeAll } = libraryContentSlice.actions
export const selectLibraryContents = (state: RootState) => state.libraryContents.contents;

export default libraryContentSlice.reducer