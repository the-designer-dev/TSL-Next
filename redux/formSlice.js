import { createSlice } from '@reduxjs/toolkit'
export const formSlice = createSlice({
  name: 'formData',
  initialState: { 
activeStep : 0,
},
  reducers: {
    nextStep: (state,action) => {
      state.activeStep = state.activeStep +1
    },
    prevStep: (state,action) => {
      state.activeStep = state.activeStep -1
    },
  }
  
})

// Action creators
export const { nextStep,prevStep } = formSlice.actions;

export default formSlice.reducer;