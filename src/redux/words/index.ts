import { WordState } from 'src/types/store';
import { current } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IWordListState {
  vocabulary: {
    [key: number]: WordState[];
  };
}

const initialState: IWordListState = {
  vocabulary: {},
};

export const wordSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (
      state,
      action: PayloadAction<{ step: number; newWord: WordState }>,
    ) => {
      console.log(current(state));
      const { step, newWord } = action.payload;
      state.vocabulary[step] = [{ ...state, ...newWord }];
    },
  },
});

export const { addWord } = wordSlice.actions;

export default wordSlice.reducer;
