import { createSlice } from '@reduxjs/toolkit'
export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    price : 0,
    extra_items :{},
    room_quantity :0,
    currentHotel:0,
    currentRoom:0,
    
  },
  reducers: {
    setReduxPrice: (state,action) => {
      state.price = action.payload
    },
    setExtra_items: (state,action) => {
      state.extra_items = action.payload
    },
    setRoom_quantity: (state,action) => {
      state.room_quantity = action.payload
    },
    setCurrentHotel: (state,action) => {
      state.currentHotel = action.payload
    },
    setCurrentRoom: (state,action) => {
      state.currentRoom = action.payload
    },
   }
  
})

// Action creators
export const { setReduxPrice,setExtra_items , setRoom_quantity ,setCurrentHotel , setCurrentRoom} = bookingSlice.actions;

export default bookingSlice.reducer;