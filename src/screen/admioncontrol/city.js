import { Box, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "../../component/button";
import Dashboard from "../../component/dashboard";
import DataGrid from "../../component/datagrid";
import DropDown from "../../component/dropdonw";
import Input from "../../component/input";
import { getData, sendData } from "../../config/firebasemethod";

function City() {
  const [model, setmodel] = useState({});
  const [data, setData] = useState([]);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 220,
      heeaderClassName: "tabel-header",
    },
    {
      field: "cityname",
      headerName: "City Name",
      width: 120,
      heeaderClassName: "tabel-header",
    },
    {
      field: "citycode",
      headerName: "City Code",
      width: 80,
      heeaderClassName: "tabel-header",
    },
    {
      field: "countrycode",
      headerName: "Country Name",
      width: 120,
      heeaderClassName: "tabel-header",
    },
  ];
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  const senddata = () => {
    fillmodel("status", true);
    sendData(model, "City/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let getdt = () => {
    getData("City")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getdt();
  }, []);
  return (
    <div>
      <Dashboard heading={"Institute"} />
      <Box
        sx={{
          p: 3,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper>
          <Box sx={{ p: 6 }}>
            <Typography variant="h3" sx={{ py: 2 }} align="center">
              Cities
            </Typography>
            <Box>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <DropDown
                    nodename="Country"
                    displayField="countryname"
                    valueField="countryname"
                    label="Country"
                    required={true}
                    onChange={(e) => fillmodel("countrycode", e.target.value)}
                  />
                </Grid>
                <Grid item md={12}>
                  <Input
                    label="City Name"
                    required={true}
                    value={model.cityname}
                    onChange={(e) => fillmodel("cityname", e.target.value)}
                  />
                </Grid>
                <Grid item md={12}>
                  <Input
                    label="City Code"
                    required={true}
                    value={model.citycode}
                    onChange={(e) => fillmodel("citycode", e.target.value)}
                  />
                </Grid>

                <Grid item md={12}>
                  <Button
                    label={"Send Data"}
                    color={"primary"}
                    variant={"contained"}
                    fullwidth
                    onClick={senddata}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ p: 3, width: "100%"}}>
        <Box
        >
          {data && data.length > 0 ? (
            <DataGrid rows={data} columns={columns} />
          ) : null
          }
        </Box>
      </Box>
    </div>
  );
}

export default City;
