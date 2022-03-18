import { createSlice } from "@reduxjs/toolkit";
export const formSlice = createSlice({
	name: "formData",
	initialState: {
		activeStep: 0,
		activeStep2: 0,
		activeStep3: 0,
	},
	reducers: {
		nextStep: (state, action) => {
			state.activeStep = state.activeStep + 1;
		},
		prevStep: (state, action) => {
			state.activeStep = state.activeStep - 1;
		},
		nextStep2: (state, action) => {
			state.activeStep2 = state.activeStep2 + 1;
		},
		prevStep2: (state, action) => {
			state.activeStep2 = state.activeStep2 - 1;
		},
		nextStep3: (state, action) => {
			state.activeStep3 = state.activeStep3 + 1;
		},
		prevStep3: (state, action) => {
			state.activeStep3 = state.activeStep3 - 1;
		},
	},
});

// Action creators
export const {
	nextStep,
	prevStep,
	nextStep2,
	prevStep2,
	nextStep3,
	prevStep3,
} = formSlice.actions;

export default formSlice.reducer;
