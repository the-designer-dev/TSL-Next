import { createSlice } from '@reduxjs/toolkit'
export const blackoutDates = createSlice({
  name: 'blackoutDates',
  initialState: {
    blackoutDates:[],

    currentHotel:0

  },
  reducers: {
    setBlackoutDates: (state,action) => {
      state.blackoutDates = action.payload
    },
    setCurrentHotel: (state,action) => {
      state.currentHotel = action.payload
    },
   }
})

// Action creators
export const { setBlackoutDates , setCurrentHotel} = blackoutDates.actions;

export default blackoutDates.reducer;