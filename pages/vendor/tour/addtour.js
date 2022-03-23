import * as React from "react";
import { Grid, Box } from "@mui/material";
import VendorLayout from "../../../components/vendorLayout";
import StyledContainer from "../../../styledComponents/styledContainer";
import StepperForm3 from "../../../components/stepper3";
import { useDispatch, useSelector } from "react-redux";
import TourOverviewForm from "../../../components/tourOverviewform";
import Overview from "../../../components/overview";
import TourPackageInfo from "../../../components/tourPackageInfo";
import TourAddFeatures from "../../../components/tourAddFeatures";

export default function AddTour() {
	const active = useSelector((state) => state.formData.activeStep3);
	const dispatch = useDispatch();
	return (
		<StyledContainer>
			<Grid container>
				<Grid item xs={12}>
					<StepperForm3 />
				</Grid>
				{active == 0 ? (
					<Grid item xs={12}>
						<TourPackageInfo />
					</Grid>
				) : (
					""
				)}
				{active == 1 ? (
					<Grid item xs={12}>
						<TourAddFeatures />
					</Grid>
				) : (
					""
				)}
				{active == 2 ? (
					<Grid item xs={12}>
						<TourOverviewForm />
					</Grid>
				) : (
					""
				)}
				{active == 3 ? (
					<Grid item xs={12}>
						<Overview />
					</Grid>
				) : (
					""
				)}
			</Grid>
		</StyledContainer>
	);
}

AddTour.getLayout = function getLayout(AddTour) {
	return <VendorLayout>{AddTour}</VendorLayout>;
};
