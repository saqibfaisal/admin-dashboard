import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState } from "react";
import "../App.css";
import Button from "../component/button";
import Select from "../component/select";
import Input from "../component/input";
import { sendData } from "../config/firebasemethod";
function RegistrationForm() {
  const [model, setmodel] = useState({});
  let fillmodel = (key, val) => {
    model[key] = val;
    setmodel({ ...model });
    console.log(model);
  };
  let date = new Date();
  let signin = () => {
    let df = model.birthdate.slice(0, 4);
    df = df  *1;
    let year = date.getFullYear();
    let diff = year - df;

    fillmodel("age", diff);
    fillmodel("registrationyear", date.getFullYear());
    fillmodel("registrationdate", date);
    fillmodel("isapprove", true);
    fillmodel("feessubmitted", true);

    sendData(model, "Forms/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="regis box">
      <Box sx={{ width: "50%", pt: 2 }}>
        <Box sx={{ border: "2px solid white", borderRadius: "25px", p: 3 }}>
          <Typography color="inherit" variant="h4">
            Registration Form
          </Typography>
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item md={6}>
              <Input
                label="FirstName"
                required={true}
                value={model.firstname}
                onChange={(e) => fillmodel("firstname", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                label="Email"
                value={model.lastname}
                onChange={(e) => fillmodel("lastname", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Select
                label="Course"
                required={true}
                value={model.course}
                onChange={(e) => fillmodel("course", e.target.value)}
                datasource={[
                  {
                    id: "Web And Mobile Application",
                    displayname: "Web And Mobile Application",
                  },
                  {
                    id: "Graphics Designing",
                    displayname: "Graphics Designing",
                  },
                  {
                    id: "Freelancing",
                    displayname: "Freelancing",
                  },
                  {
                    id: "Hacking",
                    displayname: "Hacking",
                  },
                  {
                    id: "Flutter",
                    displayname: "Flutter",
                  },
                  {
                    id: "Python",
                    displayname: "Python",
                  },
                ]}
              />
            </Grid>

            <Grid item md={12}>
              <Select
                label="Section"
                required
                value={model.section}
                onChange={(e) => fillmodel("section", e.target.value)}
                datasource={[
                  {
                    id: "A",
                    displayname: "A",
                  },
                  {
                    id: "B",
                    displayname: "B",
                  },
                  {
                    id: "C",
                    displayname: "C",
                  },
                ]}
              />
            </Grid>

            <Grid item md={6}>
              <Input
                type={"number"}
                label="Contact Number"
                value={model.contactnumber}
                onChange={(e) => fillmodel("contactnumber", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                type={"number"}
                label="Cnic Number"
                value={model.cnicnumber}
                onChange={(e) => fillmodel("cnicnumber", e.target.value)}
              />
            </Grid>

            <Grid item md={6}>
              <Input
                label="Father Name"
                value={model.fathername}
                onChange={(e) => fillmodel("fathername", e.target.value)}
              />
            </Grid>

            <Grid item md={6}>
              <Input
                type={"number"}
                label="Father Cnic"
                value={model.fathercnic}
                onChange={(e) => fillmodel("fathercnic", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                type={"number"}
                label="Father Contact"
                value={model.fathercontact}
                onChange={(e) => fillmodel("fathercontact", e.target.value)}
              />
            </Grid>
            <Grid item md={6}>
              <Input
                type={"number"}
                label="Emergency Number"
                value={model.emergencynumber}
                onChange={(e) => fillmodel("emergencynumber", e.target.value)}
              />
            </Grid>

            <Grid item md={12}>
              <Input
                type={"date"}
                helpertext={"Date of Birth"}
                value={model.birthdate}
                onChange={(e) => fillmodel("birthdate", e.target.value)}
              />
            </Grid>
            <Grid item md={12}>
              <Button
                label={"Register"}
                color={"primary"}
                variant={"contained"}
                fullwidth
                onClick={signin}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default RegistrationForm;
