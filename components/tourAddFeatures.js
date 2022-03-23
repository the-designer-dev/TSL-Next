import { React, useState, useEffect } from "react";
import FormWrapper from "../styledComponents/formWrapper";
import StyledTextField from "../styledComponents/styledTextField";
import CustomizeTextArea from "../styledComponents/styledTextarea";
import { Grid, Typography, Button, Checkbox, TextField } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";

import GroupIcon from "@mui/icons-material/Group";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputAdornment } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { DatePicker } from "@mui/lab";
import DaysToggle from "./daysToggle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";

import TourVehicle from "./tourVehicle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import TourTicket from "./tourTicket";
import TourDay from "./tourDay";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import dynamic from "next/dynamic";
import { convertToRaw, convertFromHTML, ContentState } from "draft-js";
import { convertToHTML } from "draft-convert";
import {
	setName,
	setCity,
	setAddress,
	setDescription,
} from "../redux/addHotel";
import { useDispatch, useSelector } from "react-redux";
import {
	setAdult_rates,
	setDaysLayout,
	setInfant_rates,
	setRatesAdult,
	setRatesChild,
	setRatesInfant,
	setStandardRates,
	setVipRates,
	setGuestsShouldBring,
	setProvidedToGuests,
	setProvidedToGuestsOptions,
	setRefundPolicy,
	setAdmissionRules,
} from "../redux/addTour";
import VehiclePricing from "./vehiclePricing";
import StyledButton from "../styledComponents/styledButton";
import { nextStep3, prevStep3 } from "../redux/formSlice";

const MUIRichTextEditor = dynamic(() => import("mui-rte"), { ssr: false });

function TourAddFeatures() {
	var content;
	const SSR = typeof window === "undefined";
	var contentHTML;
	var state;
	const days = useSelector((state) => state.addTour.tour_duration);
	const tour = useSelector((state) => state.addTour);
	const daysLayout1 = useSelector((state) => state.addTour.daysLayout);
	const dispatch = useDispatch();
	useEffect(() => {
		!SSR ? (contentHTML = convertFromHTML("")) : "";
		!SSR
			? (state = ContentState.createFromBlockArray(
					contentHTML.contentBlocks,
					contentHTML.entityMap
			  ))
			: "";
		!SSR ? (content = JSON.stringify(convertToRaw(state))) : "";

		for (let index = 0; index < tour; index++) {
			dispatch(setDaysLayout([...daysLayout1, {}]));
		}
	}, []);
	const onEditorChange = (event) => {
		const plainText = convertToHTML(event.getCurrentContent());
		dispatch(setRefundPolicy(plainText));
	};

	const onEditorChange2 = (event) => {
		const plainText = convertToHTML(event.getCurrentContent());
		dispatch(setAdmissionRules(plainText));
	};
	const [value, setValue] = useState();
	const [value1, setValue1] = useState();
	const [value2, setValue2] = useState();
	const [value3, setValue3] = useState();
	const [language, setLanguage] = useState(0);
	const [vehicle, setVehicle] = useState(0);
	const [ticket, setTicket] = useState(0);
	const [packtitle, setPacktitle] = useState();
	const [age, setAge] = useState(0);
	const handleChange = (event) => {
		setAge(event.target.value);
	};
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	return (
		<FormWrapper>
			<form onSubmit={() => dispatch(nextStep3())}>
				<Grid container spacing={3}>
					<Grid container item spacing={1}>
						<Grid item xs={12}>
							<Typography color={"primary.main"} variant="h6">
								Add some details about your package
							</Typography>
						</Grid>
					</Grid>

					{/* Journey Details Starts */}
					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						spacing={3}
					>
						<Grid container alignItems="center" item>
							<Grid item xs={12}>
								<Typography
									color={"primary.main"}
									variant="p"
									fontSize={18}
									fontWeight={500}
								>
									<RouteIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Add your journey details
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							item
							xs={12}
							sm={10}
							justifyContent="left"
							alignItems="start"
						>
							<Grid item xs={1}>
								<InfoIcon sx={{ color: "#2AB572" }} />
							</Grid>
							<Grid item xs={11}>
								<Typography
									fontWeight={400}
									variant="p"
									fontSize={14}
									color={"primary.main"}
								>
									Good description would give your customers a vote of
									confidence. Try adding places you'll go and what they should
									expect.
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							item
							justifyContent="left"
							spacing={2}
							xs={12}
							sm={10}
						>
							{Array.from({ length: days }).map((el, index) => {
								return (
									<Grid item xs={12} sm={12}>
										<TourDay number={index} />
									</Grid>
								);
							})}
						</Grid>
					</Grid>

					{/* Journey Details Ends */}

					{/* Pricing Starts */}

					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						spacing={3}
					>
						<Grid container alignItems="center" item>
							<Grid item xs={12}>
								<Typography
									color={"primary.main"}
									variant="p"
									fontSize={18}
									fontWeight={500}
								>
									<PriceChangeIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>
									Pricing
								</Typography>
							</Grid>
						</Grid>

						<Grid
							container
							xs={12}
							sm={10}
							alignItems="center"
							justifyContent="left"
							spacing={3}
						>
							<Grid item container spacing={3}>
								<Grid item xs={12}>
									<Typography
										color={"primary.main"}
										variant="p"
										fontSize={16}
										fontWeight={500}
									>
										Individuals
									</Typography>
								</Grid>
								<Grid
									item
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid xs={12} sm={4}>
										<Typography
											color={"primary.main"}
											variant="p"
											fontWeight={500}
										>
											Rates (Adult):
										</Typography>
									</Grid>
									<Grid xs={12} sm={6}>
										<StyledTextField
											size="small"
											onChange={(e) => dispatch(setRatesAdult(e.target.value))}
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
													<InputAdornment
														position="start"
														sx={{ padding: "0px 15px" }}
													>
														<Typography>$</Typography>
													</InputAdornment>
												),
												endAdornment: (
													<InputAdornment
														position="end"
														sx={{ padding: "0px 10px" }}
													>
														<Typography>Per Person</Typography>
													</InputAdornment>
												),
											}}
										/>
									</Grid>
								</Grid>
								<Grid
									item
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid xs={12} sm={4}>
										<Typography
											color={"primary.main"}
											variant="p"
											fontWeight={500}
										>
											Rates (Chlid) (Optional):
										</Typography>
									</Grid>
									<Grid xs={12} sm={6}>
										<StyledTextField
											size="small"
											onChange={(e) => dispatch(setRatesChild(e.target.value))}
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
													<InputAdornment
														position="start"
														sx={{ padding: "0px 15px" }}
													>
														<Typography>$</Typography>
													</InputAdornment>
												),
												endAdornment: (
													<InputAdornment
														position="end"
														sx={{ padding: "0px 10px" }}
													>
														<Typography>Per Person</Typography>
													</InputAdornment>
												),
											}}
										/>
									</Grid>
								</Grid>
								<Grid
									item
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid xs={12} sm={4}>
										<Typography
											color={"primary.main"}
											variant="p"
											fontWeight={500}
										>
											Rates (Infant) (Optional):
										</Typography>
									</Grid>
									<Grid xs={12} sm={6}>
										<StyledTextField
											size="small"
											onChange={(e) => dispatch(setRatesInfant(e.target.value))}
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
													<InputAdornment
														position="start"
														sx={{ padding: "0px 15px" }}
													>
														<Typography>$</Typography>
													</InputAdornment>
												),
												endAdornment: (
													<InputAdornment
														position="end"
														sx={{ padding: "0px 10px" }}
													>
														<Typography>Per Person</Typography>
													</InputAdornment>
												),
											}}
										/>
									</Grid>
								</Grid>
							</Grid>

							<Grid item container spacing={3}>
								<Grid item xs={12}>
									<Typography
										color={"primary.main"}
										variant="p"
										fontSize={16}
										fontWeight={500}
									>
										Vehicle Pricing
									</Typography>
								</Grid>
								{tour.vehicles.map((el, index) => (
									<Grid item xs={12}>
										<VehiclePricing id={index} />
									</Grid>
								))}
							</Grid>
							<Grid container item spacing={3}>
								<Grid item xs={12}>
									<Typography
										color={"primary.main"}
										variant="p"
										fontSize={16}
										fontWeight={500}
									>
										Ticket Pricing
									</Typography>
								</Grid>
								<Grid
									item
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid xs={12} sm={10}>
										<Typography
											color={"primary.main"}
											variant="p"
											fontWeight={500}
										>
											Standard
										</Typography>
									</Grid>
								</Grid>

								<Grid
									item
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid xs={12} sm={4}>
										<Typography
											color={"primary.main"}
											variant="p"
											fontWeight={500}
										>
											Tickets Rates
										</Typography>
									</Grid>
									<Grid xs={12} sm={6}>
										<StyledTextField
											size="small"
											onChange={(e) =>
												dispatch(setStandardRates(e.target.value))
											}
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
													<InputAdornment
														position="start"
														sx={{ padding: "0px 15px" }}
													>
														<Typography>$</Typography>
													</InputAdornment>
												),
											}}
										/>
									</Grid>
								</Grid>

								<Grid
									item
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid xs={12} sm={10}>
										<Typography
											color={"primary.main"}
											variant="p"
											fontWeight={500}
										>
											Vip
										</Typography>
									</Grid>
								</Grid>

								<Grid
									item
									container
									justifyContent="center"
									alignItems="center"
								>
									<Grid xs={12} sm={4}>
										<Typography
											color={"primary.main"}
											variant="p"
											fontWeight={500}
										>
											Tickets Rates
										</Typography>
									</Grid>
									<Grid xs={12} sm={6}>
										<StyledTextField
											size="small"
											onChange={(e) => dispatch(setVipRates(e.target.value))}
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
													<InputAdornment
														position="start"
														sx={{ padding: "0px 15px" }}
													>
														<Typography>$</Typography>
													</InputAdornment>
												),
											}}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					{/* Pricing Ends */}

					{/* Information Starts */}
					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						spacing={3}
					>
						<Grid container alignItems="center" item>
							<Grid item xs={12}>
								<Typography
									color={"primary.main"}
									variant="p"
									fontSize={18}
									fontWeight={500}
								>
									<PriorityHighIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>
									Some Important Information
								</Typography>
							</Grid>
						</Grid>
						<Grid
							container
							item
							xs={12}
							sm={10}
							justifyContent="left"
							alignItems="start"
						>
							<Grid item xs={2} sm={1}>
								<InfoIcon sx={{ color: "#2AB572" }} />
							</Grid>
							<Grid item xs={10} sm={11}>
								<Typography
									fontWeight={400}
									variant="p"
									fontSize={14}
									color={"primary.main"}
								>
									Be as detailed as possible and add each item individually
								</Typography>
							</Grid>
						</Grid>

						<Grid container item xs={12} sm={10} spacing={3}>
							<Grid item xs={12} sm={10}>
								<Typography fontWeight={500} variant="p" color={"primary.main"}>
									What's your guests should bring?
								</Typography>
							</Grid>
							<Grid item xs={12} sm={10}>
								<StyledTextField
									onChange={(e) =>
										dispatch(setGuestsShouldBring(e.target.value))
									}
									required
									fullWidth
								/>
							</Grid>
						</Grid>
						<Grid container item xs={12} sm={10} spacing={3}>
							<Grid item xs={12} sm={10}>
								<Typography fontWeight={500} variant="p" color={"primary.main"}>
									What will you provide?
								</Typography>
							</Grid>
							<Grid item xs={12} sm={10}>
								<StyledTextField
									onChange={(e) =>
										dispatch(setProvidedToGuests(e.target.value))
									}
									required
									fullWidth
								/>
							</Grid>
						</Grid>

						<Grid container item xs={12} sm={10}>
							{/* <FormControl> */}
							{/* <RadioGroup
									row
									aria-labelledby="demo-controlled-radio-buttons-group"
									name="controlled-radio-buttons-group"
									value={value}
									onChange={(e) => {
										setValue(e.target.value);
									}}
								> */}
							<Grid item xs={4}>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<Radio
										value="food"
										onChange={(e) =>
											dispatch(
												setProvidedToGuestsOptions([
													...tour.providedToGuestsOptions,
													e.target.value,
												])
											)
										}
										label="Food & Drink"
										sx={{ color: "white" }}
									/>
									<Typography color={"primary.main"}>Food & Drink</Typography>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<Radio
										value="equipment"
										onChange={(e) =>
											dispatch(
												setProvidedToGuestsOptions([
													...tour.providedToGuestsOptions,
													e.target.value,
												])
											)
										}
										label="Equipment"
										sx={{ color: "white" }}
									/>
									<Typography color={"primary.main"}>Equipment</Typography>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Box sx={{ display: "flex" }}>
									<Radio
										value="accomodation"
										onChange={(e) =>
											dispatch(
												setProvidedToGuestsOptions([
													...tour.providedToGuestsOptions,
													e.target.value,
												])
											)
										}
										label="Accomodations"
										sx={{ color: "white" }}
									/>
									<Typography color={"primary.main"}>Accomodations</Typography>
								</Box>
							</Grid>
							{/* </RadioGroup> */}
							{/* </FormControl> */}
						</Grid>

						<Grid container item xs={12} sm={10} spacing={1}>
							<Grid item xs={12}>
								<Typography fontWeight={500} variant="p" color={"primary.main"}>
									Refund Policy
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<MUIRichTextEditor
									required
									// defaultValue={content}
									onChange={onEditorChange}
									label="Start typing..."
								/>
							</Grid>
						</Grid>

						<Grid container item xs={12} sm={10} spacing={1}>
							<Grid item xs={12}>
								<Typography fontWeight={500} variant="p" color={"primary.main"}>
									Admission Rules
								</Typography>
							</Grid>
							<Grid item xs={12} sm={12}>
								<MUIRichTextEditor
									required
									// defaultValue={content}
									onChange={onEditorChange2}
									label="Start typing..."
								/>
							</Grid>
						</Grid>
						<Grid
							container
							item
							xs={12}
							sm={10}
							spacing={1}
							justifyContent={"flex-end"}
						>
							<Grid item>
								<StyledButton
									onClick={() => dispatch(prevStep3())}
									type="button"
								>
									Back
								</StyledButton>
							</Grid>
							<Grid item>
								<StyledButton type="submit">Next</StyledButton>
							</Grid>
						</Grid>
					</Grid>

					{/* Information Ends */}
				</Grid>
			</form>
		</FormWrapper>
	);
}

export default TourAddFeatures;
