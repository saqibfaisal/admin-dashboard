import { Box, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "../../component/button";
import Dashboard from "../../component/dashboard";
import DropDown from "../../component/dropdonw";
import Select from "../../component/select";
import Switch from "../../component/switch";
import { getData, sendData } from "../../config/firebasemethod";

function AdminResult() {
  const [model, setModel] = useState({});
  const [coursestatus, setcoursestatus] = useState(false);
  const [resultData, setresultData] = useState([
    {
      name: "saqib",
      marks: 82,
      rollno: 1,
      result: "Pass",
    },
    {
      name: "sattar",
      marks: 92,
      rollno: 12,
      result: "Pass",
    },
    {
      name: "Anas",
      marks: 76,
      rollno: 3,
      result: "Pass",
    },
    {
      name: "ammar",
      marks: 35,
      rollno: 4,
      result: "fail",
    },
    {
      name: "ahtisham",
      marks: 40,
      rollno: 5,
      result: "Fail",
    },
    {
      name: "izhan",
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
    <div>
      <Dashboard heading={"Institute"} />
      <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center" ,marginTop:"60px"}}>
        <Paper>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4"m="20px">Create Result</Typography>
            <Box sx={{ p: 2 ,display:"flex",justifyContent:"center",alignContent:"center" ,p:"10px"}}>
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
                    onChange={(e) =>
                      setModel({ ...model, course: e.target.value })
                    }
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
                <Grid >
                  <Box>
                    <table>
                      <tr>
                        <th>Name

                        </th>
                        <th>RollNo</th>
                        <th>Result</th>
                        <th>marks</th>
                      </tr>
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
                  <Button label={"Submit"} onClick={submitform} color={"primary"}/>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </div>
    </div>
  );
}

export default AdminResult;
