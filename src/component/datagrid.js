import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function DataGrids(props) {
  const { rows, columns } = props;
  return (
    <Box sx={{ height: 400, width:'100%' , pt:2}}>
      <DataGrid
        onSelectionModelChange={(e) => {
          console.log(e);
        }}
        rows={rows}
        columns={columns}
        pagination
        pageSize={8}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
        disableSelectiononOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
export default DataGrids;