import { Box, Grid } from '@mui/material';
import React, {useRef, useState} from 'react';
import FullCalendar from '@fullcalendar/react' 
import momentPlugin from '@fullcalendar/moment'
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction" 
import EventModal from './addEventModal';
import { useSelector } from 'react-redux';
import SelectEventModal from './selectEventModal';
import listPlugin from '@fullcalendar/list';

import bootstrap5Plugin from '@fullcalendar/bootstrap5';

function BlackoutCalendar(props) {
    const [range , setRange] = useState(null) 
    const [showModal , setShowModal] = useState(false)
    const [showModal2 , setShowModal2] = useState(false)
    const [selectable , setSelectable] = useState(false)
    const allBlackoutDates = useSelector(state => state.blackoutDates.blackoutDates).map(el =>  {return {...el , end: el.end+'T01:00:00'}})
    const calender = useRef();

    return (
        <Box sx={{height:'calc( 100vh - 107px )'}}>
        <SelectEventModal setNewDate={() => setRange(null)}open={showModal2} handleClose={() => setShowModal2(false)} secondModal = {()=> setShowModal(true) } setSelectable={(value) => setSelectable(value)}/>
        <EventModal  range={range} open={showModal} handleClose={() => setShowModal(false)}/>
        <FullCalendar
        ref = {calender}
        selectOverlap ={false}
        eventOverlap = {false}
        plugins={[ dayGridPlugin , interactionPlugin  ,momentPlugin ,timeGridPlugin , listPlugin , bootstrap5Plugin ]}
        themeSystem= 'bootstrap5'
        selectable={selectable}
        events={allBlackoutDates}
        nextDayThreshold= '00:00:00'
        // editable={selectable}
        customButtons= {{
            addEventButton : {
              text: 'Add Event',
              click: function() {
                setShowModal2(true)
              }
            }
          }}
        headerToolbar= {{
          left: 'prev,next today',
          center: 'title',
          right: 'addEventButton'
        }}

        select={ (info)=> {
        const end_date = new Date(info.end);  
        setRange([info.startStr ,end_date.toISOString().slice(0, 10)])
        setShowModal(!showModal)
        console.log(info)}}
        initialView="dayGridMonth"/>
        </Box>
    );
}

export default BlackoutCalendar;