import { WordState } from 'src/types/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IWordListState {
  words: {
    [key: number]: WordState[];
  };
}

const initialState: IWordListState = {
  words: {
    7: [
      {
        id: null,
        name: null,
        type: null,
        meaning: null,
        example: null,
        synonym: null,
      },
    ],
  },
};

export const wordSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    addWord: (
      state,
      action: PayloadAction<{ step: number; newWord: WordState }>,
    ) => {
      const { step, newWord } = action.payload;
      state.words[step].push(newWord);
    },
  },
});

export const { addWord } = wordSlice.actions;

export default wordSlice.reducer;
