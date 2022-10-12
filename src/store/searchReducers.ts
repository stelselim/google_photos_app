import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {IMediaItemTypes} from '../@types/mediaItem.types';
import type {RootState} from './store';

/**
 * Library Contents
 */

interface ISearchContentState {
  contents: Array<IMediaItemTypes>;
}

const initialState: ISearchContentState = {
  contents: [],
};

export const searchContentSlice = createSlice({
  name: 'searchContent',
  initialState,
  reducers: {
    search: (state, action: PayloadAction<Array<IMediaItemTypes>>) => {
      state.contents = [...action.payload];
    },
    addContents: (state, action: PayloadAction<Array<IMediaItemTypes>>) => {
      action.payload.forEach(element => {
        if (!state.contents.map(e => e.id).includes(element.id)) {
          state.contents.push(element);
        }
      });
    },
    removeAll: state => {
      state.contents = [];
    },
  },
});

export const {search, addContents, removeAll} = searchContentSlice.actions;
export const selectLibraryContents = (state: RootState) =>
  state.libraryContents.contents;

export default searchContentSlice.reducer;
