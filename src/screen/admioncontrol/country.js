import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../component/button";
import Dashboard from "../../component/dashboard";
import Input from "../../component/input";
import { sendData } from "../../config/firebasemethod";

function Country() {
  const [model, setmodel] = useState({});
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  const senddata = () => {
    fillmodel("status", true);
    sendData(model, "Country/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Dashboard heading={"Institute"} />
      <Box
        sx={{
          p: 3,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop:"30px"
        }}
      >
        <Paper>
          <Box sx={{ p: 6 }}>
            <Typography variant="h3" sx={{ py: 2 }} align="center">
              Country
            </Typography>
            <Box>
              <Grid container spacing={3}>
                <Grid item md={12}>
                  <Input
                    label="Country Name"
                    required={true}
                    value={model.countryname}
                    onChange={(e) => fillmodel("countryname", e.target.value)}
                  />
                </Grid>
                <Grid item md={12}>
                  <Input
                    label="Country Code"
                    required={true}
                    value={model.countrycode}
                    onChange={(e) => fillmodel("countrycode", e.target.value)}
                  />
                </Grid>
                <Grid item md={12}>
                  <Input
                    label="Currency"
                    required={true}
                    value={model.currency}
                    onChange={(e) => fillmodel("currency", e.target.value)}
                  />
                </Grid>
                <Grid item md={3} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
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
    </div>
  );
}

export default Country;
