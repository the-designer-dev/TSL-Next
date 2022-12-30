import { createSlice } from "@reduxjs/toolkit";
export const addHotelSlice = createSlice({
  name: "addHotel",
  initialState: {
    name: "",
    city: "",
    address: "",
    description: "",
    coordinates: [{}],
    images: [],
    amenities: [],
    facilities: [],
    rules: [],
    checkIn: "",
    checkOut: "",
    services: [],
    daysToRefund: 0,
    taxes: 0,
    faqs: [],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setAmenities: (state, action) => {
      state.amenities = action.payload;
    },
    setFacilities: (state, action) => {
      state.facilities = action.payload;
    },
    setRules: (state, action) => {
      state.rules = action.payload;
    },
    setCheckIn: (state, action) => {
      state.checkIn = action.payload;
    },
    setCheckOut: (state, action) => {
      state.checkOut = action.payload;
    },
    setServices: (state, action) => {
      state.services = action.payload;
    },
    setDaysToRefund: (state, action) => {
      state.daysToRefund = action.payload;
    },
    setFaqs: (state, action) => {
      state.faqs = action.payload;
    },
    setCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
    setTaxes: (state, action) => {
      state.taxes = action.payload;
    },
  },
});
// Action creators
export const {
  setName,
  setCity,
  setAddress,
  setDescription,
  setImages,
  setAmenities,
  setFacilities,
  setRules,
  setCheckIn,
  setCheckOut,
  setServices,
  setDaysToRefund,
  setFaqs,
  setCoordinates,
  setTaxes,
} = addHotelSlice.actions;
export default addHotelSlice.reducer;
