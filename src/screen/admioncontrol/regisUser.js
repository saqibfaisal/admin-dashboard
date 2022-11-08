import {
  CircularProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CSDataGrid from "../../component/datagrid";
import { getData } from "../../config/firebasemethod";
import "../../App.css";
import Dashboard from "../../component/dashboard";

function RegisUser() {
  const [data, setData] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      heeaderClassName: "tabel-header",
    },
    {
      field: "firstname",
      headerName: "FirstName",
      width: 150,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "lastname",
      headerName: "LastName",
      width: 150,
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "age",
      headerName: "AGE",
      width: 110,
      type: "number",
      heeaderClassName: "tabel-header",
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
      heeaderClassName: "tabel-header",
      editable: true,
    },
  ];
  useEffect(() => {
    getData("Forms")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);
  return (
    <div className="box">
      <Dashboard />
      <Box sx={{ width: "50%", mt: 5 }}>
        <Typography align="center" variant="h4">
          RegisUser
        </Typography>
        {data && data.length > 0 ? (
          <CSDataGrid rows={data} columns={columns} />
        ) : (
          <Box
            style={{
              height: "50vh",
              display: "flex",
              justifyContentr: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress size={"100px"} />
          </Box>
        )}
      </Box>
    </div>
  );
}

export default RegisUser;
