import { createSlice } from "@reduxjs/toolkit";
export const addRoomSlice = createSlice({
  name: "addRoom",
  initialState: {
    roomName: "",
    roomDescription: "",
    roomImages: [],
    adultCapacity: 0,
    childCapacity: 0,
    bedCapacity: 1,
    bedType: [],
    refundableRates: 0,
    nonRefundableRates: 0,
    extraBedCapacity: { extra_bed_rates: 0, extra_bed_qty: 0 },
    dateRange: [],
    roomType: "",
    roomQuantity: 0,
    roomAmenities: [],
    roomFacilities: [],
    roomRules: [],
    roomIncludes: [],
    freeCancellationDays: null,
    appliedForDays: null,
    cancelledWithinDays: null,
    noShow: null,
    noShowState: true,
    refundablePolicy: false,
  },
  reducers: {
    setRoomName: (state, action) => {
      state.roomName = action.payload;
    },
    setRoomDescription: (state, action) => {
      state.roomDescription = action.payload;
    },
    setRoomImages: (state, action) => {
      state.roomImages = action.payload;
    },
    setAdultCapacity: (state, action) => {
      state.adultCapacity = action.payload;
    },
    setChildCapacity: (state, action) => {
      state.childCapacity = action.payload;
    },
    setBedCapacity: (state, action) => {
      state.bedCapacity = action.payload;
    },
    setBedType: (state, action) => {
      state.bedType = action.payload;
    },
    setRefundableRates: (state, action) => {
      state.refundableRates = action.payload;
    },
    setNonRefundableRates: (state, action) => {
      state.nonRefundableRates = action.payload;
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
    setRoomType: (state, action) => {
      state.roomType = action.payload;
    },
    setRoomQuantity: (state, action) => {
      state.roomQuantity = action.payload;
    },
    setRoomAmenities: (state, action) => {
      state.roomAmenities = action.payload;
    },
    setRoomFacilities: (state, action) => {
      state.roomFacilities = action.payload;
    },
    setRoomRules: (state, action) => {
      state.roomRules = action.payload;
    },
    setRoomIncludes: (state, action) => {
      state.roomIncludes = action.payload;
    },
    setExtraBedCapacityRates: (state, action) => {
      state.extraBedCapacity.extra_bed_rates = action.payload;
    },
    setExtraBedCapacityQuantity: (state, action) => {
      state.extraBedCapacity.extra_bed_qty = action.payload;
    },
    setRefundablePolicy: (state, action) => {
      state.refundablePolicy = action.payload;
    },
    setFreeCancellationDays: (state, action) => {
      state.freeCancellationDays = action.payload;
    },
    setAppliedForDays: (state, action) => {
      state.appliedForDays = action.payload;
    },
    setCancelledWithinDays: (state, action) => {
      state.cancelledWithinDays = action.payload;
    },
    setNoShow: (state, action) => {
      state.noShow = action.payload;
    },
    setNoShowState: (state, action) => {
      state.noShowState = action.payload;
    },
  },
});

// Action creators
export const {
  setRoomName,
  setRoomDescription,
  setRoomImages,
  setAdultCapacity,
  setChildCapacity,
  setBedCapacity,
  setDateRange,
  setRoomType,
  setRoomQuantity,
  setRoomAmenities,
  setRoomFacilities,
  setRoomRules,
  setRoomIncludes,
  setRefundableRates,
  setNonRefundableRates,
  setBedType,
  setExtraBedCapacityRates,
  setExtraBedCapacityQuantity,
  setRefundablePolicy,
  setFreeCancellationDays,
  setAppliedForDays,
  setCancelledWithinDays,
  setNoShow,
  setNoShowState,
} = addRoomSlice.actions;

export default addRoomSlice.reducer;
