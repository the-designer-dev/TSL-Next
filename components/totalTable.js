import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

function CustomFooterComponent(props) {
  return (
    <Box
      sx={{
        padding: "10px 10px 15px 10px",
        display: "flex",
        backgroundColor: "table.tableRow2",
        borderRadius: "0px 0px 5px 5px",
      }}
    >
      <Box sx={{ flex: "2", display: "flex", justifyContent: "flex-end" }}>
        <Typography fontSize={16} fontWeight={600} variant="p">
          Grand Total
        </Typography>
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "10px",
        }}
      >
        <Typography fontSize={16} fontWeight={600} variant="p">
          {props.total}/-
        </Typography>
      </Box>
    </Box>
  );
}

export { CustomFooterComponent };

export default function TotalTable(props) {
  const total = props.total;
  console.log(props.total);
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "background.main",
        borderRadius: "5px",
      }}
    >
      <DataGrid
        components={{
          Footer: CustomFooterComponent,
        }}
        componentsProps={{
          footer: { total },
        }}
        columns={props.columns}
        rows={props.rows}
        autoHeight
        sx={{
          "& .MuiDataGrid-columnSeparator": { display: "none" },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "table.tableRow2",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "table.tableRow1",
            borderRadius: "5px 5px 0px 0px",
          },
          border: "none",
          "& .MuiDataGrid-virtualScroller": {
            "& .MuiDataGrid-row": {
              "& .MuiDataGrid-cell": {
                border: "none",
                fontWeight: "300",
                justifyContent: "center",
              },
              "&:nth-child(2n)": { backgroundColor: "table.tableRow1" },
              "&:nth-child(2n-1)": { backgroundColor: "table.tableRow2" },
            },
          },
        }}
      />
    </Box>
  );
}
