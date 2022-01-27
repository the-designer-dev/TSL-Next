import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';

function CustomFooterComponent(props) {
  return (
    <Box sx={{ padding: '10px 10px 15px 10px', display: 'flex' , backgroundColor:'table.tableRow2'  , borderRadius:'0px 0px 5px 5px' }}>
      <Box sx={{flex:'2',display:'flex' , justifyContent:'flex-end'}}><Typography fontSize={16} fontWeight={600}  variant='p'>Grand Total</Typography></Box>
      <Box sx={{flex:'1',display:'flex' , justifyContent:'flex-end'}}><Typography fontSize={16} fontWeight={600}  variant='p'>{props.total}/-</Typography></Box>
    </Box>
  );
}


export { CustomFooterComponent };

export default function TotalTable(props) {
  const total = props.total
  console.log(props.total)
  return (
      <Box sx={{width:'100%' , backgroundColor:'background.main' , borderRadius:'5px' }}>
          <Box sx={{padding:'10px 20px 0px 20px'}}>
        <Typography fontWeight={500} variant='h6'>Order Details</Typography></Box>
          <Box sx={{padding:'0px 20px 20px 20px'}}>
        <Typography fontSize={12} fontWeight={300} variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when</Typography></Box>
        <DataGrid
          components={{
            Footer: CustomFooterComponent,
          }}
          componentsProps={{
            footer: {total},
          }}
          columns={props.columns} 
          rows={props.rows} 
          autoHeight
          sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'5px 5px 0px 0px'} , border:'none', "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , fontWeight:'300'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}}
        />
      </Box>

  );
}