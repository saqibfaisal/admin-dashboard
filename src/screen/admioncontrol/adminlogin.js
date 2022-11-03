import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Button from "../../component/button"
import Input from "../../component/input";
import { LoginUser } from "../../config/firebasemethod";

function AdminLogin() {
  const [model, setmodel] = useState({});

  let navigate = useNavigate();
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    // console.log(model);
  };
  let login = () => {
    LoginUser(model)
      .then((success) => {
        console.log(success);
        navigate("/admindashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let locate = () => {
    navigate("/admin");
  };
  return (
    <div className="header box">
      <Box sx={{ width: "45%", pt: 2 ,mt:15}}>
        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Login
          </Typography>
          <Grid container spacing={2} sx={{ pt: 5 }}>
            <Grid item md={12}>
              <Input
                label="Email"
                required={true}
                value={model.email}
                type={"email"}
                onChange={(e) => fillmodel("email", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Input
                label="Password"
                required={true}
                value={model.password}
                type={"password"}
                onChange={(e) => fillmodel("password", e.target.value)}
              />
            </Grid>
            <Grid item md={12} marginTop = "18px">
              <Button
                label={"Login"}
                color={"primary"}
                variant={"contained"}
                fullwidth
                onClick={login}
              />
            </Grid>
          </Grid>
          <Grid sx={{ p: 1.5 }}>
            <Typography variant="span">Dont Have An Account ? </Typography>
            <Typography onClick={locate} variant="span" sx={{ textDecoration: "underline" ,cursor:"pointer" }}>
              signup
            </Typography>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default AdminLogin;