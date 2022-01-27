import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import bookingReducer from './bookingSlice';
import hotelQuery from './hotelQuery';
import formSlice from './formSlice';
export default configureStore({
  reducer:{
  user: userReducer,
  hotelquery: hotelQuery,
  booking: bookingReducer,
  formData : formSlice
  } 
})