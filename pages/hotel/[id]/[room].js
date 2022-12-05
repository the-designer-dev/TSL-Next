import { Box, Grid, Typography, Button } from "@mui/material";
import { React, useEffect, useState } from "react";
import Slider from "react-slick";
import moment from "moment";
import { API_URL } from "../../../config";
import axios from "axios";
import { useRouter } from "next/router";
import {
  setDestination,
  setCheckIn,
  setCheckOut,
  setAdult,
  setChild,
} from "../../../redux/hotelQuery";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import StyledContainer from "../../../styledComponents/styledContainer";
import CustomerLayout from "../../../components/customerLayout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckIcon from "@mui/icons-material/Check";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@mui/material";
import {
  setReduxPrice,
  setExtra_items,
  setCurrentHotel,
  setRoom_quantity,
  setCurrentRoom,
} from "../../../redux/bookingSlice";
import AdultCard from "../../../components/adultCard";
import ChildCard from "../../../components/childCard";
import TotalTable from "../../../components/totalTable";
import Easypaisa from "../../../assets/Easypaisa-logo@300x.png";
import Jazzcash from "../../../assets/JazzCash-logo@300x.png";
import Upaisa from "../../../assets/UPaisa-logo@300x.png";
import Image from "next/image";
import StyledButton from "../../../styledComponents/styledButton";
import hotelImagesIcon from "../../../assets/hotelImages.png";
import hotelDetailsIcon from "../../../assets/hotelDetailsIcon.png";
import addOnMeals from "../../../assets/addOnMeals.png";

import CustomerLayout2 from "../../../components/customerLayout2";
import LoginModal from "../../../components/loginModal";
import StyledTextField from "../../../styledComponents/styledTextField";
const fetch = (id, destination, checkin, checkout, adult, child) =>
  axios({
    method: "post",
    url: `${API_URL}/filter-hotels/${id}`,
    data: {
      city: destination,
      checkindate: checkin,
      checkoutdate: checkout,
      adult: parseInt(adult),
      child: parseInt(child),
    },
  })
    .then((res) => res.data)
    .catch((err) => undefined);

function Book(props) {
  var room1;
  const token = useSelector((state) => state.user.token);
  const price = useSelector((state) => state.booking.price);
  const extra_items = useSelector((state) => state.booking.extra_items);
  const currentHotel = useSelector((state) => state.booking.currentHotel);
  const roomQuantity = useSelector((state) => state.booking.room_quantity);
  const booking_type = useSelector((state) => state.booking.booking_type);
  const checkout = useSelector((state) => state.hotelquery.checkOut);
  const checkin = useSelector((state) => state.hotelquery.checkIn);
  const destination = useSelector((state) => state.hotelquery.destination);
  const adult = useSelector((state) => state.hotelquery.adult);
  const child = useSelector((state) => state.hotelquery.child);
  const adultInfo = useSelector((state) => state.booking.adultInfo);
  const childInfo = useSelector((state) => state.booking.childInfo);
  const user = useSelector((state) => state.user.user);

  const router = useRouter();
  const { id, room } = router.query;
  var reqData = [
    id,
    useSelector((state) => state.hotelquery.destination),
    useSelector((state) => state.hotelquery.checkIn),
    useSelector((state) => state.hotelquery.checkOut),
    useSelector((state) => state.hotelquery.adult),
    useSelector((state) => state.hotelquery.child),
  ];
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, error } = useSWR(reqData, fetch);
  var [adultCards, setAdultCards] = useState([]);
  var [childCards, setChildCards] = useState([]);
  // var [pricestate, setPricestate] = useState(null);
  const [extraFields, setExtraFields] = useState({});

  var [open, setOpen] = useState(false);

  const [columns, setColumns] = useState([
    { field: "sign", headerName: "", flex: 1, align: "center" },
    { field: "particular", headerName: "Particular", flex: 2 },
    { field: "quantity", headerName: "Quantity", flex: 2 },
    { field: "unit price", headerName: "Unit Price", flex: 2 },
    { field: "price", headerName: "Price (PKR)", flex: 2 },
  ]);
  const [rows, setRows] = useState([]);
  const extraFieldChange = async (name, val) => {
    var value;
    if (!val && val !== 0) {
      value = 1;
    } else {
      value = val;
    }

    if (val < 0) {
      value = 0;
    }
    setExtraFields((extraFields) => ({
      ...extraFields,
      [name]: value,
    }));
  };
  useEffect(() => {
    dispatch(setExtra_items(extraFields));
    sessionStorage.setItem("Extra_items", JSON.stringify(extraFields));
  }, [extraFields]);

  function checkOut() {
    if (Object.keys(user).length !== 0) {
      var extras = [];
      for (const [key, value] of Object.entries(extra_items)) {
        data !== undefined && id !== undefined && room !== undefined
          ? key !== "extraBeds"
            ? (extras = [
                ...extras,
                {
                  extra_field_name: key,
                  extra_field_qty: value,
                  extra_field_price: data.hotel_extra_fields.find(
                    (el) => el.extra_field_name === key
                  ).extra_field_price,
                },
              ])
            : (extras = [
                ...extras,
                {
                  extra_field_name: key,
                  extra_field_qty: value,
                  extra_field_price: data.rooms.find(
                    (el) => el.id === parseInt(room)
                  ).extraBeds[0].extra_bed_rates,
                },
              ])
          : console.log("not entered");
      }
      var reqData = {
        total_days: moment(checkout).diff(moment(checkin), "days") + 1,
        booking_start_date: checkin,
        booking_end_date: checkout,
        room_qty: roomQuantity,
        room_id: room,
        adult_booking: adultInfo,
        child_booking: childInfo,
        extras: extras,
        order_total: price,
        booking_type: booking_type,
      };
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios
        .post(`${API_URL}/orders`, reqData, {
          headers: headers,
        })
        .then((response) => {
          alert("Order created!");
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
          alert("Order could not be created , try again");
        });
    } else {
      console.log("login user");
      setOpen(true);
    }
  }

  useEffect(() => {
    if (checkout === undefined || checkout === null) {
      if (
        sessionStorage.getItem("destination") !== undefined &&
        sessionStorage.getItem("destination") !== null
      ) {
        dispatch(setDestination(sessionStorage.getItem("destination")));
        dispatch(
          setCheckIn(moment(sessionStorage.getItem("checkIn"), "YYYY-MM-DD"))
        );
        dispatch(
          setCheckOut(moment(sessionStorage.getItem("checkOut"), "YYYY-MM-DD"))
        );
        dispatch(setAdult(sessionStorage.getItem("adult")));
        dispatch(setChild(sessionStorage.getItem("child")));
        dispatch(setReduxPrice(sessionStorage.getItem("ReduxPrice")));
        dispatch(
          setExtra_items(JSON.parse(sessionStorage.getItem("Extra_items")))
        );
        dispatch(setCurrentHotel(sessionStorage.getItem("CurrentHotel")));
        dispatch(setCurrentRoom(sessionStorage.getItem("CurrentRoom")));
        dispatch(setRoom_quantity(sessionStorage.getItem("Room_quantity")));
      } else {
        router.push({ pathname: "/" });
      }
    }
  }, []);

  useEffect(() => {
    for (let index = 0; index < adult; index++) {
      setAdultCards((adultCards) => [...adultCards, index + 1]);
    }
    for (let index = 0; index < child; index++) {
      setChildCards((childCards) => [...childCards, index + 1]);
    }
  }, [adult, child]);

  useEffect(() => {
    var index = 1;
    setRows([]);
    data !== undefined && id !== undefined && room !== undefined
      ? setRows((rows) => [
          ...rows,
          {
            id: index,
            sign: ">",
            particular: data.rooms.find((el) => el.id === parseInt(room))
              .roomname,
            quantity: "x" + roomQuantity,
            "unit price": room1.blackout_dates
              ? booking_type === "refundable"
                ? room1.blackout_dates.nonrefundable_rates
                : room1.blackout_dates.refundable_rates
              : booking_type === "refundable"
              ? room1.roomrefundprice
              : room1.roomnonrefundprice,
            price:
              data.rooms.find((el) => el.id === parseInt(room))
                .roomnonrefundprice * roomQuantity,
          },
        ])
      : setRows([]);
    for (const [key, value] of Object.entries(extra_items)) {
      data !== undefined && id !== undefined && room !== undefined
        ? key !== "extraBeds"
          ? setRows((rows) => [
              ...rows,
              {
                id: ++index,
                sign: ">",
                particular: key,
                quantity: "x" + value,
                "unit price": data.hotel_extra_fields.find(
                  (el) => el.extra_field_name === key
                ).extra_field_price,
                price:
                  data.hotel_extra_fields.find(
                    (el) => el.extra_field_name === key
                  ).extra_field_price * value,
              },
            ])
          : setRows((rows) => [
              ...rows,
              {
                id: ++index,
                sign: ">",
                particular: "Extra Beds",
                quantity: "x" + value,
                "unit price": data.rooms.find((el) => el.id === parseInt(room))
                  .extraBeds[0].extra_bed_rates,
                price:
                  data.rooms.find((el) => el.id === parseInt(room)).extraBeds[0]
                    .extra_bed_rates * value,
              },
            ])
        : setRows((rows) => [...rows]);
    }
    calculatePrice();
    data !== undefined
      ? (room1 = data?.rooms?.find((el) => el.id === parseInt(room)))
      : "";
  }, [data, extra_items]);

  const calculatePrice = () => {
    var days =
      moment(sessionStorage.getItem("checkOut")).diff(
        moment(sessionStorage.getItem("checkIn")),
        "days"
      ) + 1;
    var temp_price = 0;
    if (data?.hotel_extra_fields !== undefined) {
      Object.values(data.hotel_extra_fields).forEach((key) => {
        extraFields[key.extra_field_name]
          ? (temp_price =
              temp_price +
              key.extra_field_price * extraFields[key.extra_field_name])
          : "";
      });
      dispatch(setReduxPrice(parseInt(price) + temp_price));
      sessionStorage.setItem("ReduxPrice", parseInt(price) + temp_price);
      // setPricestate(parseInt(price) + temp_price);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    dotsClass: "hero_dots",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: (
      <div className="right_arr">
        {" "}
        <ChevronRightIcon
          sx={{ fontSize: "40px", color: "#FFF", borderRadius: "50px" }}
        />{" "}
      </div>
    ),
    prevArrow: (
      <div className="left_arr">
        {" "}
        <ChevronLeftIcon
          sx={{ fontSize: "40px", color: "#FFF", borderRadius: "50px" }}
        />{" "}
      </div>
    ),
  };

  return data !== undefined &&
    id !== undefined &&
    room !== undefined &&
    checkout ? (
    <Box>
      <StyledContainer>
        <Grid container item xs={12} spacing={2} sx={{ paddingTop: "50px" }}>
          <Grid item>
            <img src={hotelImagesIcon.src} />
          </Grid>
          <Grid item>
            <Typography sx={{ paddingBottom: "24px" }} variant="h6">
              Hotel Images
            </Typography>
          </Grid>
        </Grid>
        <Slider
          className="hero_slider"
          style={{ backgroundColor: "transparent" }}
          {...settings}
        >
          {data.rooms
            .find((el) => el.id === parseInt(room))
            .images.map((slide) => (
              <div style={{ width: "100%", height: "100%" }}>
                <img
                  style={{ width: "100%", height: "100%", maxHeight: "70vh" }}
                  src={`${API_URL}${slide.url}`}
                />
              </div>
            ))}
        </Slider>

        <LoginModal setOpen={setOpen} open={open} />

        <Grid container item xs={12} spacing={2} sx={{ paddingTop: "30px" }}>
          <Grid item>
            <img src={hotelDetailsIcon.src} />
          </Grid>
          <Grid item>
            <Typography sx={{ paddingBottom: "24px" }} variant="h6">
              Customer Details
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ padding: "16px 0px" }}>
          {adultCards.map((el, index) => (
            <Grid item xs={12} sm={4} md={3}>
              <AdultCard num={index} />
            </Grid>
          ))}
          {childCards.map((el, index) => (
            <Grid item xs={12} sm={4} md={3}>
              <ChildCard num={index} />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={4}>
            {" "}
            <Grid container item xs={12} spacing={2}>
              <Grid item>
                <img src={addOnMeals.src} />
              </Grid>
              <Grid item>
                <Typography sx={{ paddingBottom: "24px" }} variant="h6">
                  Would You Like To Add-On Meals?
                </Typography>
              </Grid>
            </Grid>
            <Grid container item sx={{ paddingBottom: "30px" }}>
              <Grid xs={6} sm={3} item>
                <Typography fontSize={14} fontWeight={500} variant="p">
                  Meal
                </Typography>
              </Grid>
              <Grid xs={6} sm={3} item>
                <Typography fontSize={14} fontWeight={500} variant="p">
                  Unit Price
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                alignItems="center"
                direction="row"
                justifyContent="center"
                container
                item
              >
                <Typography fontSize={14} fontWeight={500} variant="p">
                  Quantity
                </Typography>
              </Grid>
            </Grid>
            {data.hotel_extra_fields.map((ele) => (
              <Grid
                container
                item
                sx={{ borderBottom: "1px solid #ddd", padding: "5px 0px" }}
              >
                <Grid xs={6} sm={3} item>
                  <Typography fontSize={14} fontWeight={300} variant="p">
                    {ele.extra_field_name}
                  </Typography>
                </Grid>
                <Grid xs={6} sm={3} item>
                  <Typography fontSize={14} fontWeight={300} variant="p">
                    PKR {ele.extra_field_price}
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  alignItems="center"
                  spacing={2}
                  direction="row"
                  justifyContent="center"
                  container
                  item
                >
                  <Grid
                    container
                    item
                    sx={{ textAlign: "center" }}
                    justifyContent="center"
                    xs={12}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Button
                        onClick={() =>
                          extraFieldChange(
                            ele.extra_field_name,
                            extraFields[ele.extra_field_name] - 1
                          )
                        }
                        sx={{
                          backgroundColor: "transparent",
                          color: "button.main",
                        }}
                      >
                        -
                      </Button>
                      <input
                        defaultValue="0"
                        onChange={(e) =>
                          extraFieldChange(
                            ele.extra_field_name,
                            parseInt(e.target.value)
                          )
                        }
                        id="outlined-name"
                        name={ele.extra_field_name}
                        value={
                          extraFields[ele.extra_field_name]
                            ? extraFields[ele.extra_field_name]
                            : 0
                        }
                        size="small"
                        style={{
                          width: "40px",
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }}
                        type="number"
                      />
                      <Button
                        onClick={() =>
                          extraFieldChange(
                            ele.extra_field_name,
                            extraFields[ele.extra_field_name] + 1
                          )
                        }
                        sx={{
                          backgroundColor: "transparent",
                          color: "button.main",
                        }}
                      >
                        +
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container item xs={12} spacing={2}>
              <Grid item>
                <img src={hotelDetailsIcon.src} />
              </Grid>
              <Grid item>
                <Typography sx={{ paddingBottom: "24px" }} variant="h6">
                  Booking Details
                </Typography>
              </Grid>
            </Grid>
            {console.log(rows)}
            <TotalTable
              columns={columns}
              rows={rows.filter((el) => el.quantity !== "x0")}
              total={price}
            />
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  ) : (
    ""
  );
}

export default Book;

Book.getLayout = function getLayout(Book) {
  return <CustomerLayout>{Book}</CustomerLayout>;
};
