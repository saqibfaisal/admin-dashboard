import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Button from "../../component/button";
import Input from "../../component/input";
import Selects from "../../component/select";
import { sendData } from "../../config/firebasemethod";
function AdminQuiz() {
  const [model, setmodel] = useState({});
  // let Navigate = useNavigate();

  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  let coursedata =()=>{
    sendData(model,"quiz")
    .then((success) => {
        console.log(success);
        // Navigate("/adminquiz")
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(model)
  }
  return (
    <div className="adminbg box">
      <Box sx={{ p: 2, width: "50%" }}>
        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Quiz 
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={12}>
              <Input
                label="Question"
                required={true}
                value={model.question}
                onChange={(e) => fillmodel("question", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Selects />
              {/* <Input
                label="Option 1"
                required={true}
                value={model.option_1}
                onChange={(e) => fillmodel("option_1", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Input
                label="Option 2"
                required={true}
                value={model.option_2}
                onChange={(e) => fillmodel("option_2", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Input
                label="Option 3"
                required={true}
                value={model.option_3}
                onChange={(e) => fillmodel("option_3", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Input
                label="Option 4"
                required={true}
                value={model.option_4}
                onChange={(e) => fillmodel("option_4", e.target.value)}
              /> */}
            </Grid>
            <Grid item md={12}>
              <Input
                label="Correct Answer"
                required={true}
                value={model.correctanswer}
                onChange={(e) => fillmodel("correctanswer", e.target.value)}
              />
            </Grid>

            <Grid item md={12}>
              <Button
                label={"Send Data"}
                color={"primary"}
                variant={"contained"}
                fullwidth
                   onClick={coursedata}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default AdminQuiz;
