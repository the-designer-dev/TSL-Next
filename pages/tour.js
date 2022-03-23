import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../config";
import StyledButton from "../styledComponents/styledButton";
import StyledContainer from "../styledComponents/styledContainer";
import StyledTextField from "../styledComponents/styledTextField";

function Tour(props) {
	const [origin, setOrigin] = useState(null);
	const [destination, setDestination] = useState(null);
	const [departureDate, setDepartureDate] = useState(null);
	const [adults, setAdults] = useState(null);

	const submitData = async (e) => {
		e.preventDefault();
		const response = await axios({
			method: "POST",
			url: `${API_URL}/flights`,
			data: { origin, destination, departureDate, adults },
		});

		console.log(response);
	};

	return (
		<StyledContainer square={true}>
			<form onSubmit={(e) => submitData(e)}>
				<Grid container>
					<Grid container item xs={12}>
						<Grid
							container
							item
							spacing={1}
							direction={"column"}
							alignItems={"center"}
							xs={3}
						>
							<Grid item>
								<Typography>Origin</Typography>
							</Grid>
							<Grid item>
								<StyledTextField onChange={(e) => setOrigin(e.target.value)} />
							</Grid>
						</Grid>
						<Grid
							container
							item
							spacing={1}
							direction={"column"}
							alignItems={"center"}
							xs={2}
						>
							<Grid item>
								<Typography>Destiantion</Typography>
							</Grid>
							<Grid item>
								<StyledTextField
									onChange={(e) => setDestination(e.target.value)}
								/>
							</Grid>
						</Grid>
						<Grid
							container
							item
							spacing={1}
							direction={"column"}
							alignItems={"center"}
							xs={2}
						>
							<Grid item>
								<Typography>Departure Date</Typography>
							</Grid>
							<Grid item>
								<StyledTextField
									type={"text"}
									onChange={(e) => setDepartureDate(e.target.value)}
								/>
							</Grid>
						</Grid>
						<Grid
							container
							item
							spacing={1}
							direction={"column"}
							alignItems={"center"}
							xs={3}
						>
							<Grid item>
								<Typography>Adults</Typography>
							</Grid>
							<Grid item>
								<StyledTextField onChange={(e) => setAdults(e.target.value)} />
							</Grid>
						</Grid>
						<Grid
							container
							item
							spacing={1}
							// direction={"column"}
							justifyContent={"center"}
							alignItems={"center"}
							xs={2}
						>
							<Grid item xs={12}>
								<StyledButton type="submit">Search</StyledButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</StyledContainer>
	);
}

export default Tour;
