import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { setImages } from "../redux/addHotel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { API_URL } from "../config";
import React from "react";
export var hotelImgs = [];
export var roomImgs = [];
const Dropfile = (props) => {
  const imgs = useSelector((state) => state.addRoom.roomImages);
  const [images, setStateImages] = useState([]);
  useEffect(() => {
    var formData = new FormData();
    formData.append("images", images);
    images.length > 0
      ? props.hotel
        ? (hotelImgs = images.map((el) => el))
        : (roomImgs = images.map((el) => el))
      : "";

    console.log(hotelImgs);
    console.log(roomImgs);
  }, [images]);

  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };
  const handleSubmit = (files, allFiles) => {
    if (allFiles.length > 0) {
      setStateImages(allFiles.map((el) => el.file));
      allFiles.forEach((f) => f.remove());
    }
  };
  return (
    <Grid container spacing={1}>
      {images.length > 0
        ? images.map((el) => (
          <Grid item xs={3}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              src={URL.createObjectURL(el)}
            />
          </Grid>
        ))
        : imgs.map((el) => (
          <Grid item xs={3}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              src={`${API_URL}${el.url}`}
            />
          </Grid>
        ))}
      {/* {roomImgs.map((el) => (
        <Grid item xs={3}>
          <img
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
            src={URL.createObjectURL(el)}
          />
        </Grid>
      ))} */}
      {props.hotel
        ? hotelImgs.map((el) => (
          <Grid item xs={3}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              src={URL.createObjectURL(el)}
            />
          </Grid>
        ))
        : roomImgs.map((el) => (
          <Grid item xs={3}>
            <img
              style={{ width: "100%", height: "100%", borderRadius: "8px" }}
              src={URL.createObjectURL(el)}
            />
          </Grid>
        ))}
      <Grid item xs={12}>
        <Dropzone
          styles={{ color: "#fff" }}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*"
        />
      </Grid>
    </Grid>
  );
};
export default React.memo(Dropfile);
