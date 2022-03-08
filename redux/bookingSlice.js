import { createSlice } from '@reduxjs/toolkit'
export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    price : 0,
    extra_items :{},
    room_quantity :0,
    currentHotel:0,
    currentRoom:0,
    booking_type:'',
    oneLead : false,
    guestSet : false,
    adultInfo:[],
    childInfo:[],
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
    setOneLead: (state,action) => {
      state.oneLead = action.payload
    },
    setAdultInfo:(state ,action)=>{
      state.adultInfo = action.payload
    },
    setChildInfo:(state ,action)=>{
      state.childInfo = action.payload
    },
    setGuestSet:(state ,action)=>{
      state.guestSet = action.payload
    },
    setBookingType:(state ,action)=>{
      state.booking_type = action.payload
    }
   }
  
})

// Action creators
export const { setReduxPrice,setExtra_items , setRoom_quantity ,setCurrentHotel , setCurrentRoom ,setOneLead , setAdultInfo , setChildInfo, setGuestSet , setBookingType} = bookingSlice.actions;

export default bookingSlice.reducer;