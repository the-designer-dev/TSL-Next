import { Box, Button, Grid , TextField } from '@mui/material';
import React, { useState } from 'react';
import StyledTextField from '../styledComponents/styledTextField';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch , useSelector } from 'react-redux';
import { DeleteOutlined } from '@mui/icons-material';
import { DatePicker } from '@mui/lab';
import StyledButton from '../styledComponents/styledButton';
import {setDateRange} from '../redux/addRoom'

function DateRange(props) {
  const dispatch = useDispatch()
  const room = useSelector(state => state.addRoom) 
    const [dateRange , setStateDateRange] = useState([])
    const [startDate , setStartDate] = useState(null)
    const [endDate , setEndDate] = useState(null)
    const [refundablePrice , setRefundablePrice] = useState(null)
    const [nonrefundablePrice , setNonrefundablePrice] = useState(null)
    var dateRangeVar = []
    function removeRange(start , end){
        setStateDateRange(dateRange.filter((el) => {return start !== el.start_date && el.end_date !== end}))
            dateRangeVar = dateRange.filter((el) => {return start !== el.start_date && el.end_date !== end})
            dispatch(setDateRange(dateRangeVar))
    }
    function addRange(){
        setStateDateRange(dateRange =>[...dateRange , {start_date: startDate, end_date:endDate ,refundable_price: refundablePrice, nonrefundable_price : nonrefundablePrice }])
        dateRangeVar = [...dateRangeVar , {start_date: startDate, end_date:endDate ,refundable_price: refundablePrice, nonrefundable_price : nonrefundablePrice }]
          dispatch(setDateRange(dateRangeVar))
    }
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid container item>
                    <Grid item xs={12}>
                    {dateRange.map((el) =>  (<Accordion sx={{'& .MuiAccordionSummary-root':{backgroundColor:'table.tableRow2' , '& .MuiAccordionSummary-content':{alignItems:'center' , wordWrap:'break-word'}} , '& .MuiAccordionDetails-root':{backgroundColor:'table.tableRow1'} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>
            {el.start_date.format('MM/DD')} ------ {el.end_date.format('MM/DD')}
          </Typography>
          <Button onClick={() => removeRange(el.start_date,el.end_date)}><DeleteOutlined/></Button>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Refundable Price : PKR {el.refundable_price}/-
          </Typography>
          <Typography>
          Non-Refundable Price : PKR {el.nonrefundable_price}/-
          </Typography>
        </AccordionDetails>
      </Accordion>))}
                    </Grid>
                </Grid>
                <Grid container item spacing={1}>
                <Grid item xs={12} sm={6}><Typography variant='p'>Start date</Typography></Grid>
                    <Grid item xs={12} sm={6}>
                    <DatePicker value={startDate}  onChange={(newValue) => { setStartDate(newValue)   }} renderInput={(params) => <TextField fullWidth  sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }}  variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/>
                    </Grid>
                    <Grid item xs={12} sm={6}><Typography variant='p'>End date</Typography></Grid>
                    <Grid item xs={12} sm={6}>
                    <DatePicker value={endDate}  onChange={(newValue) => { setEndDate(newValue)   }} renderInput={(params) => <TextField fullWidth  sx={{'& .MuiOutlinedInput-root':{'& .MuiOutlinedInput-input':{color:'#000'},'& .MuiInputAdornment-root':{'& .MuiButtonBase-root':{'& .MuiSvgIcon-root':{color:'button.main'}}}} , backgroundColor:'#FFF', borderRadius:'5px' }}  variant="outlined" placeholder="MM/DD/YYYY" {...params} />}/>
                    </Grid>
                    <Grid item xs={12} sm={6}><Typography variant='p'>Refundable Price</Typography></Grid>
                    <Grid item xs={12}  sm={6}>
                        <StyledTextField onChange={(e) => {setRefundablePrice(e.target.value)}} fullWidth  placeholder='Enter refundable Price'/>
                    </Grid>
                    <Grid item xs={12} sm={6}><Typography variant='p'>Non-Refundable Price</Typography></Grid>
                    <Grid item xs={12}  sm={6}>
                        <StyledTextField onChange={(e) => {setNonrefundablePrice(e.target.value)}} fullWidth  placeholder='Enter non refundable Price'/>
                    </Grid>
                    <Grid container item xs={12} justifyContent='flex-end'>
                        <StyledButton onClick={() => {addRange()}}>Add Date Range</StyledButton>
                    </Grid>
                </Grid>


            </Grid>
        </Box>
    );
}

export default DateRange;