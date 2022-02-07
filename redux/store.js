import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';
import hotelQuery from './hotelQuery';
import addHotel from './addHotel';
import formSlice from './formSlice';
import  addRoomSlice  from './addRoom';
export default configureStore({
  reducer:{
  user: userReducer,
  hotelquery: hotelQuery,
  booking: bookingReducer,
  formData : formSlice,
  addHotel: addHotel,
  addRoom: addRoomSlice
  } 
})