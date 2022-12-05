import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import StyledTextField from "../styledComponents/styledTextField";
import StyledButton from "../styledComponents/styledButton";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRules } from "../redux/addHotel";
import { setRoomRules } from "../redux/addRoom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  minWidth: "320px",
  maxWidth: "500px",
  bgcolor: "background.main",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function RulesModal(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const rules = useSelector((state) => state.addHotel.rules);
  const roomRules = useSelector((state) => state.addRoom.roomRules);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  function addrule() {
    handleClose();
    if (props.hotel === true) {
      var copy_rules = rules.map((el) => el);
      copy_rules.push({ service_name: name, service_description: description });
      dispatch(setRules(copy_rules));
    } else {
      var copy_rules = roomRules.map((el) => el);
      copy_rules.push({ service_name: name, service_description: description });
      dispatch(setRoomRules(copy_rules));
    }
  }

  return (
    <div>
      <StyledButton onClick={handleOpen}>Add Rule</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2} fullWidth>
            <Grid container item spacing={2}>
              {/* <Grid item xs={3}>
                <Typography sx={{ color: "primary.main" }} variant="p">
                  Rule Name
                </Typography>
              </Grid> */}
              <Grid item xs={12}>
                <StyledTextField
                  label={"Rule Name"}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item spacing={2}>
              {/* <Grid item xs={3}>
                <Typography sx={{ color: "primary.main" }} variant="p">
                  Rule Description
                </Typography>
              </Grid> */}
              <Grid item xs={12}>
                <StyledTextField
                  label={"Rule Description"}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              sx={{ margin: "10px 0px 0px 0px" }}
              container
              justifyContent="space-around"
              spacing={2}
            >
              <Grid item>
                <StyledButton onClick={() => addrule()}>
                  Add Question
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
