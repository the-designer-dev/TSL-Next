import { createSlice } from '@reduxjs/toolkit'
export const themeState = createSlice({
  name: 'themeState',
  initialState: {darkMode:true},
  reducers: {
    toggleMode: (state) => {
        state.darkMode = !state.darkMode
      },
  }
  
})

// Action creators
export const { toggleMode } = themeState.actions;

export default themeState.reducer;