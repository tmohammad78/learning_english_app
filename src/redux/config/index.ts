import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConfigState {
  lastSeen: Date | null;
}

const initialState = {
  lastSeen: null,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setLastSeen: (state, action: PayloadAction<any>) => {
      console.log(state.lastSeen);

      state.lastSeen = action.payload;
    },
  },
});

export const { setLastSeen } = configSlice.actions;

export default configSlice.reducer;
