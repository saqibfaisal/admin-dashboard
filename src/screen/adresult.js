import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DropDown from "../component/dropdonw";
import Switch from "../component/switch";
import Button from "../component/button";
import { sendData } from "../config/firebasemethod";

function AdminResult() {
  const [model, setModel] = useState({});
  const [coursestatus, setcoursestatus] = useState(false);
  const [resultData, setresultData] = useState([
    {
      name: "Abbas",
      marks: 75,
      rollno: 135,
      result: "Pass",
    },
    {
      name: "ALi",
      marks: 35,
      rollno: 136,
      result: "fail",
    },
    {
      name: "Sohail",
      marks: 85,
      rollno: 137,
      result: "Pass",
    },
    {
      name: "Abuzar",
      marks: 80,
      rollno: 138,
      result: "Pass",
    },
    {
      name: "Akram",
      marks: 40,
      rollno: 139,
      result: "Fail",
    },
    {
      name: "Kamran",
      marks: 65,
      rollno: 140,
      result: "Pass",
    },
    {
      name: "Rafay",
      marks: 75,
      rollno: 141,
      result: "Pass",
    },
  ]);
  let submitform = () => {
    model.isShowResult = coursestatus;
    model.result = resultData;
    console.log(model);
    sendData(model, "Results/")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="">
      <Box sx={{ width: "100%" }}>
        <Typography variant="h4">Create Result</Typography>
        <Box sx={{ p: 2 }}>
          <Grid container>
            <Grid md={4} item>
              <Switch
                value={coursestatus}
                label={"courses"}
                onChange={(e) => setcoursestatus(e.target.checked)}
              />
            </Grid>
            <Grid md={8} item>
              <DropDown
                onChange={(e) => setModel({ ...model, course: e.target.value })}
                label={"Courses"}
                fullWidth
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
            <Grid md={12} item>
              <Box>
                <table>
                  {resultData.map((x, i) => (
                    <tr>
                      <td>{x.name}</td>
                      <td>{x.rollno}</td>
                      <td>{x.result}</td>
                      <td>{x.marks}</td>
                    </tr>
                  ))}
                </table>
              </Box>
            </Grid>
            <Grid md={12} item>
              <Button label={"Submit"} onClick={submitform} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default AdminResult;
