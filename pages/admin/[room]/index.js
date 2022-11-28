import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import {
  setRoomName,
  setRoomDescription,
  setRoomImages,
  setAdultCapacity,
  setChildCapacity,
  setBedCapacity,
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
} from "../../../redux/addRoom";
import EditRoomForm from "../../../components/editRoomForm";
import EditOverview from "../../../components/editOverview";
import { API_URL } from "../../../config";
import StepperForm2 from "../../../components/stepper2";
import StyledContainer from "../../../styledComponents/styledContainer";
import AdminLayout from "../../../components/adminLayout";
function EditRoom(props) {
  const router = useRouter();
  const { room } = router.query;
  const dispatch = useDispatch();
  const active = useSelector((state) => state.formData.activeStep2);

  useEffect(async () => {
    if (room) {
      const rooms = await axios({
        method: "GET",
        url: `${API_URL}/rooms/${room}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      dispatch(setRoomName(rooms.data.roomname));
      dispatch(setBedCapacity(rooms.data.bedcapacity));
      dispatch(setRoomDescription(rooms.data.roomdescription));
      dispatch(setRoomImages(rooms.data.roomimages));
      dispatch(setAdultCapacity(rooms.data.adult));
      dispatch(setChildCapacity(rooms.data.child));
      dispatch(setRefundableRates(rooms.data.roomrefundprice));
      dispatch(setNonRefundableRates(rooms.data.roomnonrefundprice));
      dispatch(setRoomType(rooms.data.roomcategories));
      dispatch(setRoomQuantity(rooms.data.roomqty));
      dispatch(setRoomAmenities(rooms.data.room_amenities));
      dispatch(setRoomFacilities(rooms.data.room_facilities));
      dispatch(setRoomRules(rooms.data.room_rules));
      dispatch(setBedType(rooms.data.bed_type));
      dispatch(setRoomIncludes(rooms.data.room_included));
      dispatch(setExtraBedCapacityRates(rooms.data.extra_bed.extra_bed_rates));
      dispatch(setExtraBedCapacityQuantity(rooms.data.extra_bed.extra_bed_qty));
    }
  }, [room]);
  return (
    <StyledContainer>
      <Grid container>
        <Grid item xs={12}>
          <StepperForm2 />
        </Grid>
        {active == 0 ? (
          <Grid item xs={12}>
            <EditRoomForm room={room} />
          </Grid>
        ) : (
          ""
        )}
        {active == 1 ? (
          <Grid item xs={12}>
            <EditOverview room={room} />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </StyledContainer>
  );
}
EditRoom.getLayout = function getLayout(EditRoom) {
  return <AdminLayout>{EditRoom}</AdminLayout>;
};

export default EditRoom;
