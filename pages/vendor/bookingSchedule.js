import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import momentPlugin from "@fullcalendar/moment";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import SelectEventModal from "../../components/selectEventModal";
import listPlugin from "@fullcalendar/list";
import EventModal from "../../components/addEventModal";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import VendorLayout from "../../components/vendorLayout";
import axios from "axios";
import { API_URL } from "../../config";

function BlackoutCalendar(props) {
  const [range, setRange] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [selectable, setSelectable] = useState(false);
  const [tableData, setTableData] = useState([]);

  const allBlackoutDates = useSelector(
    (state) => state.blackoutDates.blackoutDates
  ).map((el) => {
    return { ...el, end: el.end + "T01:00:00" };
  });
  const calender = useRef();

  useEffect(async () => {
    const orders = await axios({
      method: "GET",
      url: `${API_URL}/orders`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => res.data);
    setTableData(
      orders.map((el) => {
        return {
          id: el.id,
          title: `${el.roomname}    ${new Date(
            el.booking_start_date
          )} ----- ${new Date(el.booking_end_date)}`,
          start: el.booking_start_date,
          end: el.booking_end_date,
          overlap: false,
          backgroundColor:
            el.order_status === "completed"
              ? "#2ab76f"
              : el.order_status === "cancelled"
              ? "#b10101"
              : "#c9b854",
        };
      })
    );
  }, []);

  return (
    <Box sx={{ height: "calc( 100vh - 107px )", padding: "30px" }}>
      <SelectEventModal
        setNewDate={() => setRange(null)}
        open={showModal2}
        handleClose={() => setShowModal2(false)}
        secondModal={() => setShowModal(true)}
        setSelectable={(value) => setSelectable(value)}
      />
      <EventModal
        range={range}
        open={showModal}
        handleClose={() => setShowModal(false)}
      />
      <FullCalendar
        ref={calender}
        selectOverlap={false}
        eventOverlap={false}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          momentPlugin,
          timeGridPlugin,
          listPlugin,
          bootstrap5Plugin,
        ]}
        themeSystem="bootstrap5"
        selectable={selectable}
        events={tableData}
        nextDayThreshold="00:00:00"
        headerToolbar={{
          left: "",
          center: "title",
          right: "prev,next today",
        }}
        select={(info) => {
          const end_date = new Date(info.end);
          setRange([info.startStr, end_date.toISOString().slice(0, 10)]);
          setShowModal(!showModal);
          console.log(info);
        }}
        initialView="dayGridMonth"
      />
    </Box>
  );
}
BlackoutCalendar.getLayout = function getLayout(BlackoutCalendar) {
  return <VendorLayout>{BlackoutCalendar}</VendorLayout>;
};

export default BlackoutCalendar;
