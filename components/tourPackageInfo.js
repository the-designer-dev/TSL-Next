import { React, useState } from "react";
import FormWrapper from "../styledComponents/formWrapper";
import StyledTextField from "../styledComponents/styledTextField";
import CustomizeTextArea from "../styledComponents/styledTextarea";
import { Grid, Typography, Button, Checkbox, TextField } from "@mui/material";
import LocationPicker from "./locationPicker";
import SelectLanguage from "./selectLanguage";
import LanguageIcon from "@mui/icons-material/Language";
import TourLanguage from "./tourlanguage";
import StyledAddResponseButton from "../styledComponents/styledAddResponseButton";
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
import {
	setHas_date_range,
	setTitle,
	setCity,
	setMeet_point,
	setCoordinates,
	setLanguages,
	setMin_group_size,
	setMax_group_size,
	setMin_age,
	setParents_bring_kids,
	setVehicles,
	setTickets,
	setExperiences,
	setAdult_rates,
	setChild_rates,
	setInfant_rates,
	setMin_private_group,
	setBooked_as_private,
	setAvailable_daterange_end,
	setAvailable_daterange_start,
	setTour_duration,
	setSeperate_mode_transport,
	setChoose_their_tickets,
} from "../redux/addTour";
import SelectVehicle from "./selectVehicle";
import { useDispatch, useSelector } from "react-redux";
import Dropfile from "./dropzone";
import TourVehicle from "./tourVehicle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import TourTicket from "./tourTicket";
import StyledButton from "../styledComponents/styledButton";
import StyledButtonDanger from "../styledComponents/styledButtonDanger";
import { nextStep3 } from "../redux/formSlice";

function TourPackageInfo() {
	const [value, setValue] = useState();
	const [value1, setValue1] = useState();
	const [value2, setValue2] = useState();
	const [value3, setValue3] = useState();
	const [language, setLanguage] = useState(1);
	const [vehicle, setVehicle] = useState(1);
	const [ticket, setTicket] = useState(1);
	const [packtitle, setPacktitle] = useState();
	const [age, setAge] = useState(0);
	// const handleChange = (event) => {
	//     setAge(event.target.value);
	// };
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const dispatch = useDispatch();
	const addTour = useSelector((state) => state.addTour);
	const handleChange = (event) => {
		//   dispatch(setParents_bring_kids(event.target.checked))
	};

	return (
		<FormWrapper>
			<form>
				<Grid container spacing={3}>
					<Grid container item spacing={1}>
						<Grid item xs={12}>
							<Typography color={"primary.main"} variant="h6">
								Tell us more about your Tour Packages
							</Typography>
						</Grid>
					</Grid>
					<Grid container item alignItems="center" spacing={1}>
						<Grid item xs={12} sm={4}>
							<Typography color={"primary.main"} variant="p" fontWeight={500}>
								Title for the package
							</Typography>
						</Grid>
						<Grid item xs={12} sm={8}>
							<StyledTextField
								value={addTour.title}
								onChange={(e) => dispatch(setTitle(e.target.value))}
								required
								fullWidth
								placeholder="Enter Package Name"
							/>
						</Grid>
					</Grid>

					<Grid container item alignItems="center" spacing={1}>
						<Grid item xs={12} sm={4}>
							<Typography color={"primary.main"} variant="p" fontWeight={500}>
								Which city will you host in?
							</Typography>
						</Grid>
						<Grid item xs={12} sm={8}>
							<StyledTextField
								value={addTour.city}
								onChange={(e) => dispatch(setCity(e.target.value))}
								required
								fullWidth
								placeholder="Enter City"
							/>
						</Grid>
					</Grid>

					<Grid container item alignItems="start" spacing={1}>
						<Grid item xs={12} sm={4}>
							<Typography color={"primary.main"} variant="p" fontWeight={500}>
								Where should guests meet you?
							</Typography>
						</Grid>
						<Grid item xs={12} sm={8}>
							<CustomizeTextArea
								minRows={3}
								value={addTour.meet_point}
								onChange={(e) => dispatch(setMeet_point(e.target.value))}
								required
								fullWidth
								placeholder="Enter the address where everyone should arrive at"
							/>
						</Grid>
					</Grid>

					<Grid container item spacing={2}>
						<Grid item xs={12}>
							<Typography fontWeight={500} variant="p" color={"primary.main"}>
								Place a pin to locate your hotel
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<LocationPicker tour={true} />
						</Grid>
					</Grid>

					<Grid container item alignItems="start" spacing={1}>
						<Grid item xs={12} sm={4}>
							<Typography color={"primary.main"} variant="p" fontWeight={500}>
								{" "}
								How guests can find you once they arrive? (optional)
							</Typography>
						</Grid>
						<Grid item xs={12} sm={8}>
							<CustomizeTextArea
								minRows={3}
								fullWidth
								placeholder="If location is hard to find, include detailed instructions"
							/>
						</Grid>
					</Grid>

					<Grid container item alignItems="center" spacing={1}>
						<Grid item xs={12} sm={4}>
							<Typography color={"primary.main"} variant="p" fontWeight={500}>
								Where we'll be going
							</Typography>
						</Grid>
						<Grid item xs={12} sm={8}>
							<StyledTextField
								required
								value={addTour.city}
								onChange={(e) => dispatch(setCity(e.target.value))}
								fullWidth
								placeholder="Enter the location where tour takes place"
							/>
						</Grid>
					</Grid>

					{/* Language Starts */}
					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						spacing={2}
					>
						<Grid container alignItems="center" item>
							<Grid item xs={12}>
								<Typography
									color={"primary.main"}
									variant="p"
									fontSize={18}
									fontWeight={500}
								>
									<LanguageIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Language
								</Typography>
							</Grid>
						</Grid>

						<Grid container item justifyContent="center" spacing={2} xs={12}>
							{[...Array(language)].map((a, i) => (
								<TourLanguage key={i} id={i + 1} />
							))}
						</Grid>
						<Grid container item justifyContent="left">
							<StyledAddResponseButton
								type="button"
								onClick={() => {
									setLanguage(language + 1);
									dispatch(setLanguages([...addTour.languages, {}]));
								}}
							>
								+ Add another response
							</StyledAddResponseButton>
						</Grid>
					</Grid>

					{/* Language Ends */}

					{/* Guests Start */}

					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						spacing={2}
					>
						<Grid container alignItems="center" item>
							<Grid item xs={12}>
								<Typography
									color={"primary.main"}
									variant="p"
									fontSize={18}
									fontWeight={500}
								>
									<GroupIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Guests
								</Typography>
							</Grid>
						</Grid>

						<Grid container item justifyContent="center" spacing={4}>
							<Grid
								container
								item
								xs={12}
								sm={5}
								spacing={1}
								alignItems="center"
							>
								<Grid item xs={12} sm={4}>
									<Typography
										fontWeight={400}
										variant="p"
										color={"primary.main"}
									>
										Min Group Size:
									</Typography>
								</Grid>
								<Grid item xs={12} sm={8}>
									<StyledTextField
										value={addTour.min_group_size}
										onChange={(e) =>
											dispatch(setMin_group_size(e.target.value))
										}
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
							<Grid
								container
								item
								xs={12}
								sm={5}
								spacing={1}
								alignItems="center"
							>
								<Grid item xs={12} sm={4}>
									<Typography
										fontWeight={400}
										variant="p"
										color={"primary.main"}
									>
										Max Group Size:
									</Typography>
								</Grid>
								<Grid item xs={12} sm={8}>
									<StyledTextField
										value={addTour.max_group_size}
										onChange={(e) =>
											dispatch(setMax_group_size(e.target.value))
										}
										fullWidth
										size="small"
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
													<Button
														onClick={() =>
															dispatch(
																setMax_group_size(addTour.max_group_size - 1)
															)
														}
													>
														-
													</Button>
												</InputAdornment>
											),
											endAdornment: (
												<InputAdornment position="end">
													<Button
														onClick={() =>
															dispatch(
																setMax_group_size(addTour.max_group_size + 1)
															)
														}
													>
														+
													</Button>
												</InputAdornment>
											),
										}}
									/>
								</Grid>
							</Grid>

							<Grid
								container
								item
								xs={12}
								sm={5}
								spacing={1}
								alignItems="center"
							>
								<Grid item xs={12} sm={4}>
									<Typography
										fontWeight={400}
										variant="p"
										color={"primary.main"}
									>
										Minimum Age:
									</Typography>
								</Grid>
								<Grid item xs={12} sm={8}>
									<Box sx={{ minWidth: 120 }}>
										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">Age</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={addTour.min_age}
												label="Language"
												onChange={(e) => dispatch(setMin_age(e.target.value))}
											>
												<MenuItem value={1}>1</MenuItem>
												<MenuItem value={2}>2</MenuItem>
												<MenuItem value={3}>3</MenuItem>
												<MenuItem value={4}>4</MenuItem>
												<MenuItem value={5}>5</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>
							</Grid>

							<Grid container item xs={12} sm={5} alignItems="center">
								<Grid item xs={2} sm={2}>
									<Checkbox
										checked={addTour.parents_bring_kids}
										onChange={(e) =>
											dispatch(setParents_bring_kids(e.target.checked))
										}
										sx={{ padding: "0px" }}
									/>
								</Grid>
								<Grid item xs={10} sm={10}>
									<Typography
										fontWeight={400}
										variant="p"
										color={"primary.main"}
									>
										Parents can bring kids under 2 years
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
										color={"primary.main"}
									>
										Note: Minors can only attend with their legal guardian.
									</Typography>
								</Grid>
							</Grid>

							<Grid
								container
								item
								xs={12}
								sm={5}
								spacing={0}
								alignItems="center"
							>
								{addTour.booked_as_private ? (
									<>
										<Grid item xs={12} sm={4}>
											<Typography
												fontWeight={400}
												variant="p"
												color={"primary.main"}
											>
												Min Private Group Size:
											</Typography>
										</Grid>
										<Grid item xs={12} sm={8}>
											<StyledTextField
												value={addTour.min_private_group}
												onChange={(e) => {
													dispatch(setMin_private_group(e.target.value));
												}}
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
															<Button
																onClick={() =>
																	dispatch(
																		setMin_private_group(
																			addTour.min_private_group - 1
																		)
																	)
																}
															>
																-
															</Button>
														</InputAdornment>
													),
													endAdornment: (
														<InputAdornment position="end">
															<Button
																onClick={() =>
																	dispatch(
																		setMin_private_group(
																			addTour.min_private_group + 1
																		)
																	)
																}
															>
																+
															</Button>
														</InputAdornment>
													),
												}}
											/>
										</Grid>{" "}
									</>
								) : (
									""
								)}
							</Grid>

							<Grid container item xs={12} sm={5} alignItems="center">
								<Grid item xs={2} sm={2}>
									<Checkbox
										checked={addTour.booked_as_private}
										onChange={(e) =>
											dispatch(setBooked_as_private(e.target.checked))
										}
										sx={{ padding: "0px" }}
									/>
								</Grid>
								<Grid item xs={10} sm={10}>
									<Typography
										fontWeight={400}
										variant="p"
										color={"primary.main"}
									>
										Can be booked as private
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					{/* Guests End */}

					{/* Event Validity Starts */}
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
									<EventAvailableIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Event Validity
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
								<Typography fontWeight={400} variant="p" color={"primary.main"}>
									Note: add time period when this tour is available
								</Typography>
							</Grid>
						</Grid>

						<Grid container item xs={12} sm={10} alignItems="center">
							<Grid item xs={1} sm={1}>
								<Checkbox
									checked={addTour.has_date_range}
									onChange={(e) =>
										dispatch(setHas_date_range(e.target.checked))
									}
									sx={{ padding: "0px" }}
								/>
							</Grid>
							<Grid item xs={11} sm={11}>
								<Typography fontWeight={400} variant="p" color={"primary.main"}>
									This tour does not have date range
								</Typography>
							</Grid>
						</Grid>

						<Grid
							container
							item
							xs={12}
							sm={10}
							alignItems="center"
							justifyContent="left"
							spacing={1}
						>
							{!addTour.has_date_range ? (
								<>
									<Grid item xs={12} sm={4}>
										<Typography
											fontWeight={400}
											variant="p"
											color={"primary.main"}
										>
											Date range when its available:{" "}
										</Typography>
									</Grid>
									<Grid item xs={12} sm={4}>
										<DatePicker
											value={addTour.available_daterange_start}
											onChange={(newValue) => {
												dispatch(setAvailable_daterange_start(newValue));
											}}
											renderInput={(params) => (
												<TextField
													fullWidth
													sx={{
														"& .MuiOutlinedInput-root": {
															"& .MuiOutlinedInput-input": { color: "#000" },
															"& .MuiInputAdornment-root": {
																"& .MuiButtonBase-root": {
																	"& .MuiSvgIcon-root": {
																		color: "button.main",
																	},
																},
															},
														},
														backgroundColor: "#FFF",
														borderRadius: "5px",
													}}
													variant="outlined"
													placeholder="MM/DD/YYYY"
													{...params}
												/>
											)}
										/>
									</Grid>
									<Grid item xs={12} sm={4}>
										<DatePicker
											value={addTour.available_daterange_end}
											onChange={(newValue) => {
												dispatch(setAvailable_daterange_end(newValue));
											}}
											renderInput={(params) => (
												<TextField
													fullWidth
													sx={{
														"& .MuiOutlinedInput-root": {
															"& .MuiOutlinedInput-input": { color: "#000" },
															"& .MuiInputAdornment-root": {
																"& .MuiButtonBase-root": {
																	"& .MuiSvgIcon-root": {
																		color: "button.main",
																	},
																},
															},
														},
														backgroundColor: "#FFF",
														borderRadius: "5px",
													}}
													variant="outlined"
													placeholder="MM/DD/YYYY"
													{...params}
												/>
											)}
										/>
									</Grid>{" "}
								</>
							) : (
								""
							)}
							<Grid item xs={12}>
								<Typography fontWeight={500} variant="p" color={"primary.main"}>
									Days (Available){" "}
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<DaysToggle />
							</Grid>
						</Grid>
					</Grid>

					{/* Event Validity Ends */}

					{/* Duration Starts */}
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
									<AccessTimeIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Duration
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
								<Typography fontWeight={400} variant="p" color={"primary.main"}>
									Later on, you’ll be able to pick the exact calendar dates and
									you’ll also be able to adjust times for each individual date
								</Typography>
							</Grid>
						</Grid>

						<Grid
							container
							item
							xs={12}
							sm={10}
							alignItems="center"
							justifyContent="center"
							spacing={1}
						>
							<Grid item xs={12} sm={6}>
								<Typography fontWeight={400} variant="p" color={"primary.main"}>
									How Long is the tour
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4}>
								<Box sx={{ minWidth: 80 }}>
									<FormControl fullWidth>
										<InputLabel id="demo-simple-select-label">Days</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={addTour.tour_duration}
											label="Days"
											onChange={(e) =>
												dispatch(setTour_duration(e.target.value))
											}
										>
											<MenuItem value={1}>1</MenuItem>
											<MenuItem value={2}>2</MenuItem>
											<MenuItem value={3}>3</MenuItem>
											<MenuItem value={4}>4</MenuItem>
											<MenuItem value={5}>5</MenuItem>
											<MenuItem value={6}>6</MenuItem>
											<MenuItem value={7}>7</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</Grid>
						</Grid>
					</Grid>
					{/* Duration Ends */}

					{/* Optional Features Starts*/}
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
									<RoomServiceIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Optional Features
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
								<Typography fontWeight={400} variant="p" color={"primary.main"}>
									We are providing you the ability to offer customized packages
									to your customers so they can truly personalize their
									experience with you. This section is optional.
								</Typography>
							</Grid>
						</Grid>

						<Grid
							container
							item
							xs={12}
							sm={10}
							justifyContent="space-between"
							alignItems="start"
						>
							<Grid items xs={7}>
								<Typography fontWeight={400} variant="p" color={"primary.main"}>
									Do you want to provide a separate mode of transport to your
									customers for an additional fee?
								</Typography>
							</Grid>
							<Grid items xs={4}>
								<FormControl>
									<RadioGroup
										row
										aria-labelledby="demo-controlled-radio-buttons-group"
										name="controlled-radio-buttons-group"
										value={addTour.seperate_mode_transport}
										onChange={(e) => {
											dispatch(setSeperate_mode_transport(e.target.value));
										}}
									>
										<FormControlLabel
											value="yes"
											control={<Radio />}
											label="Yes"
											sx={{ color: "white" }}
										/>
										<FormControlLabel
											value="no"
											control={<Radio />}
											label="No"
											sx={{ color: "white" }}
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>

						<Grid
							container
							item
							xs={12}
							sm={10}
							justifyContent="space-between"
							alignItems="start"
						>
							<Grid items xs={7}>
								<Typography fontWeight={400} variant="p" color={"primary.main"}>
									Do you want to provide your customers with the option to
									choose their tickets?
								</Typography>
							</Grid>
							<Grid items xs={4}>
								<FormControl>
									<RadioGroup
										row
										aria-labelledby="demo-controlled-radio-buttons-group"
										name="controlled-radio-buttons-group"
										value={addTour.choose_their_tickets}
										onChange={(e) => {
											dispatch(setChoose_their_tickets(e.target.value));
										}}
									>
										<FormControlLabel
											value="yes"
											control={<Radio />}
											label="Yes"
											sx={{ color: "white" }}
										/>
										<FormControlLabel
											value="no"
											control={<Radio />}
											label="No"
											sx={{ color: "white" }}
										/>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
					</Grid>

					{/* Optional Features Ends */}

					{/* Transport Starts */}

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
									<DirectionsBusFilledIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Transport
								</Typography>
							</Grid>
						</Grid>
						{[...Array(vehicle)].map((a, i) => (
							<TourVehicle key={i} id={i + 1} />
						))}
						<Grid container item sm={10} justifyContent="left">
							<Grid item xs={12}>
								<StyledAddResponseButton
									type="button"
									onClick={() => {
										setVehicle(vehicle + 1);
										dispatch(setVehicles([...addTour.vehicles, {}]));
									}}
								>
									+ Add another response
								</StyledAddResponseButton>
							</Grid>
						</Grid>
					</Grid>

					{/* Transport Ends */}

					{/* Tickets Starts */}
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
									<LocalActivityIcon
										sx={{
											fontSize: "34px",
											marginRight: "10px",
											color: "#2AB572",
										}}
									/>{" "}
									Tickets
								</Typography>
							</Grid>
						</Grid>
						{[...Array(ticket)].map((a, i) => (
							<TourTicket key={i} id={i + 2} />
						))}
						<Grid container item sm={10} justifyContent="left">
							<Grid item xs={12}>
								<StyledAddResponseButton
									type="button"
									onClick={() => {
										setTicket(ticket + 1);
										dispatch(setTickets([...addTour.tickets, {}]));
									}}
								>
									+ Add another response
								</StyledAddResponseButton>
							</Grid>
						</Grid>
					</Grid>
					{/* Tickets Ends */}
					<Grid
						container
						item
						alignItems="center"
						justifyContent="center"
						spacing={3}
					>
						{/* <StyledButtonDanger>Back</StyledButtonDanger> */}
						<StyledButton
							onClick={() => {
								dispatch(nextStep3());
							}}
						>
							Next
						</StyledButton>
					</Grid>
				</Grid>
			</form>
		</FormWrapper>
	);
}

export default TourPackageInfo;
