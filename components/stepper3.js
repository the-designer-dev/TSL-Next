import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import HotelIcon from "@mui/icons-material/Hotel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SummarizeIcon from "@mui/icons-material/Summarize";
import StepConnector, {
	stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useSelector } from "react-redux";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 22,
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: theme.palette.button.main,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: theme.palette.button.main,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 3,
		border: 0,
		backgroundColor:
			theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
	backgroundColor:
		theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
	zIndex: 1,
	color: "#fff",
	width: 50,
	height: 50,
	display: "flex",
	borderRadius: "50%",
	justifyContent: "center",
	alignItems: "center",
	...(ownerState.active && {
		backgroundColor: theme.palette.button.main,
		boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
	}),
	...(ownerState.completed && {
		backgroundColor: theme.palette.button.main,
	}),
}));

function ColorlibStepIcon(props) {
	const { active, completed, className } = props;

	const icons = {
		1: <MeetingRoomIcon />,
		2: <MeetingRoomIcon />,
		3: <SummarizeIcon />,
	};

	return (
		<ColorlibStepIconRoot
			ownerState={{ completed, active }}
			className={className}
		>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

const steps = ["Add Tour", "Add Features", "Summary"];

export default function StepperForm3() {
	const active = useSelector((state) => state.formData.activeStep3);
	return (
		<Stack sx={{ width: "100%" }} spacing={4}>
			<Stepper
				alternativeLabel
				activeStep={active}
				connector={<ColorlibConnector />}
			>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Stack>
	);
}
