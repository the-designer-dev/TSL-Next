import React from 'react';
import { DataGrid } from "@mui/x-data-grid";

function StyledDatagrid(props) {
    return (
        <DataGrid sx={{ '& .MuiDataGrid-columnSeparator':{display:'none'}, '& .MuiDataGrid-footerContainer':{backgroundColor:'table.tableRow2'}, '& .MuiDataGrid-columnHeaders':{backgroundColor:'table.tableRow1'} , border:'none', "& .MuiDataGrid-virtualScroller": { "& .MuiDataGrid-row": {'& .MuiDataGrid-cell':{border:'none'},  "&:nth-child(2n)": {   backgroundColor: "table.tableRow1" } , "&:nth-child(2n-1)": {  backgroundColor: "table.tableRow2" }}}}} columns={props.columns} rows={props.rows} autoHeight/>

    );
}

export default StyledDatagrid;