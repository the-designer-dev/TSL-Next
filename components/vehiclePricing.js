import { Box, Grid, Typography, InputAdornment, Button } from "@mui/material";
import StyledTextField from "../styledComponents/styledTextField";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVehicles } from "../redux/addTour";

function VehiclePricing(props) {
	const vehicles = useSelector((state) => state.addTour.vehicles);
	const dispatch = useDispatch();

	const changePrice = (event) => {
		var varVehicles = vehicles.map((el) => el);
		varVehicles[props.id - 1] = {
			...varVehicles[props.id],
			price: event.target.value,
		};
		dispatch(setVehicles(varVehicles));
	};

	const changeMaxCapacity = (event) => {
		var varVehicles = vehicles.map((el) => el);
		varVehicles[props.id - 1] = {
			...varVehicles[props.id],
			changeMaxCapacity: event.target.value,
		};
		dispatch(setVehicles(varVehicles));
	};

	return (
		<Grid item container spacing={3}>
			<Grid item container justifyContent="center" alignItems="center">
				<Grid xs={12} sm={10}>
					<Typography color={"primary.main"} variant="p" fontWeight={500}>
						{vehicles[props.id].make} {vehicles[props.id].model}{" "}
						{vehicles[props.id].year}
					</Typography>
				</Grid>
			</Grid>

			<Grid item container justifyContent="center" alignItems="center">
				<Grid xs={12} sm={4}>
					<Typography color={"primary.main"} variant="p" fontWeight={500}>
						Vehicle Rates
					</Typography>
				</Grid>
				<Grid xs={12} sm={6}>
					<StyledTextField
						size="small"
						onChange={(e) => dispatch(changePrice(e.target.value))}
						fullWidth
						sx={{
							"& .MuiInputBase-root": {
								padding: "0px",
								"& .MuiInputAdornment-positionStart": {
									backgroundColor: "button.main",
									height: "40px",
									maxHeight: "none",
									borderRadius: "4px 0px 0px 4px",
									"& .MuiTypography-root": { color: "#FFF" },
								},
								"& .MuiInputAdornment-positionEnd": {
									backgroundColor: "button.main",
									height: "40px",
									maxHeight: "none",
									borderRadius: "0px 4px 4px 0px",
									"& .MuiTypography-root": { color: "#FFF" },
								},
							},
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start" sx={{ padding: "0px 15px" }}>
									<Typography>$</Typography>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
			</Grid>
			<Grid item container justifyContent="center" alignItems="center">
				<Grid xs={12} sm={4}>
					<Typography color={"primary.main"} variant="p" fontWeight={500}>
						Max Capacity
					</Typography>
				</Grid>
				<Grid xs={12} sm={6}>
					<StyledTextField
						onChange={(e) => changeMaxCapacity(e)}
						size="small"
						fullWidth
						sx={{
							"& .MuiInputBase-root": {
								padding: "0px",
								"& .MuiInputAdornment-positionStart": {
									backgroundColor: "button.main",
									height: "40px",
									maxHeight: "none",
									borderRadius: "4px 0px 0px 4px",
									"& .MuiTypography-root": { color: "#FFF" },
								},
								"& .MuiInputAdornment-positionEnd": {
									backgroundColor: "button.main",
									height: "40px",
									maxHeight: "none",
									borderRadius: "0px 4px 4px 0px",
									"& .MuiTypography-root": { color: "#FFF" },
								},
							},
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<Button>-</Button>
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<Button>+</Button>
								</InputAdornment>
							),
						}}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default VehiclePricing;
