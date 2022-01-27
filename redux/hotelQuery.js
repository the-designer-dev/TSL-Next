import { createSlice } from '@reduxjs/toolkit'
export const hotelQuery = createSlice({
  name: 'HotelQueryData',
  initialState: { 
  destination: null,
  checkIn: null,
  checkOut: null,
  adult: 0,
  child: 0
},
  reducers: {
    setDestination: (state,action) => {
      state.destination = action.payload
    },
    setCheckIn: (state,action) => {
      state.checkIn = action.payload
    },
    setCheckOut: (state,action) => {
      state.checkOut = action.payload
    },
    setAdult: (state,action) => {
      state.adult = action.payload
    },
    setChild: (state,action) => {
      state.child = action.payload
    }
  }
  
})

// Action creators
export const { setDestination,setCheckIn,setCheckOut,setAdult , setChild } = hotelQuery.actions;

export default hotelQuery.reducer;