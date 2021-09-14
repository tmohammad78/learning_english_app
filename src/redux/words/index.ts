import { WordState } from 'src/types/store';
import { current } from '@reduxjs/toolkit';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IWordListState {
  vocabulary: {
    [key: number]: WordState[];
  };
}

const initialState: IWordListState = {
  vocabulary: {
    7: [
      {
        id: 1,
        name: 'good',
        type: ['adj'],
        meaning: ['fine'],
        example: ['the weather is good'],
        synonym: ['perfect'],
      },
      {
        id: 2,
        name: 'frustration',
        type: ['noun'],
        meaning: ['disappointed'],
        example: ['was a great frustration to him'],
        synonym: [''],
      },
      {
        id: 3,
        name: 'empathy',
        type: ['noun'],
        meaning: ['be with some who had problem'],
        example: ['I want to be your empathy'],
        synonym: ['sympathy'],
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

      state.vocabulary[step] = state.vocabulary[step]
        ? [...state.vocabulary[step], newWord]
        : [newWord];
    },
    getWord: (state, action: PayloadAction<{ id: number; step: number }>) => {
      const { id, step } = action.payload;
      state.vocabulary[step].map((item, i) => {
        if (item.id === id) {
          return item;
        }
      });
    },
  },
});

export const { addWord, getWord } = wordSlice.actions;

export default wordSlice.reducer;
