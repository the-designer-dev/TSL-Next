import { Box, Grid } from '@mui/material';
import React from 'react';
import AdminLayout from '../../components/adminLayout';
import DetailsBox from '../../components/detailsBox';
import { DataGrid } from '@mui/x-data-grid';
import StyledContainer from '../../styledComponents/styledContainer';
import StyledButton from '../../styledComponents/styledButton';

function CustomerDetails(props) {
    const rows =[
        {id:1 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
        {id:2 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
        {id:3 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
        {id:4 ,name : 3, age : 3, gender : 3, cnic : 3, phone : 'asdxcasd'},
    ]

    const columns = [
        { field: 'name', headerName: 'Name' , flex:1 ,headerAlign: 'center'},
        { field: 'age', headerName: 'Age',flex:1 ,headerAlign: 'center'},
        { field: 'gender', headerName: 'Gender',flex:1 ,headerAlign: 'center'},
        { field: 'cnic', headerName: 'CNIC/Passport',flex:1 ,headerAlign: 'center'},
        { field: 'phone', headerName: 'Phone',flex:1 ,headerAlign: 'center'},
        { field: 'details', headerName: 'Details',flex:1 ,headerAlign: 'center',renderCell: (params) => (
            <StyledButton
              onClick={() => { 
                console.log(params.row)
              }}
            >
              View More
            </StyledButton>
          )}]   
    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <DetailsBox title={'Customer Details'} details ={[{question:'Full Name' , answer:'Yousuf Abdullah'}, {question:'Full Name' , answer:'Yousuf Abdullah'} , {question:'Full Name' , answer:'Yousuf Abdullah'} , {question:'Full Name' , answer:'Yousuf Abdullah'} , {question:'Full Name' , answer:'Yousuf Abdullah'}, {question:'Full Name' , answer:'Yousuf Abdullah'}]} />
                </Grid>
                <Grid item xs={12}>
                <DataGrid sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2' , borderRadius:'0px  0px 8px 8px'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1' , borderRadius:'8px 8px 0px 0px'} , border:'none' , "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none' , justifyContent:'center'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}} columns={columns} rows={rows} autoHeight/>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}


CustomerDetails.getLayout = function getLayout(CustomerDetails) {
    return (
      <AdminLayout>
        {CustomerDetails}
      </AdminLayout>
    )
  }

export default CustomerDetails;