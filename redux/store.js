import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';
import hotelQuery from './hotelQuery';
import addHotel from './addHotel';
import formSlice from './formSlice';
import blackoutDates from './blackoutDates';
import  addRoomSlice  from './addRoom';
import addTourSlice from './addTour';
export default configureStore({
  reducer:{
  user: userReducer,
  hotelquery: hotelQuery,
  booking: bookingReducer,
  formData : formSlice,
  addHotel: addHotel,
  addRoom: addRoomSlice,
  blackoutDates : blackoutDates,
  addTour: addTourSlice
  } 
})