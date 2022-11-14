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



// function DataGrids(props) {
//   const { datasource, Cols } = props;

//   console.log(datasource, Cols);

//   return (
//     <>
//       {Cols && Array.isArray(Cols) && (
//         <table style={{ width: "100%" }}>
//           <thead>
//             <tr>
//               <th>s#</th>
//               {Cols.map((y, i) => (
//                 <th key={i}>{y.displayName}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {datasource &&
//             Array.isArray(datasource) &&
//             datasource.length > 0 ? (
//               datasource.map((x, i) => (
//                 <tr key={i}>
//                   <td>{i + 1}</td>
//                   {Cols.map((y, ind) => (
//                     <td key={ind}>{x[y.key]}</td>
//                   ))}
//                 </tr>
//               ))
//             ) : (
//               <h1>No Data Found</h1>
//             )}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// }
// export default DataGrids;
