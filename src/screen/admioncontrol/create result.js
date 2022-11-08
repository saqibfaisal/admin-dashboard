import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "../../component/button";
import Select from "../../component/select";
import Switch from "../../component/switch";
import { getData, sendData } from "../../config/firebasemethod";

function CreateResult() {
  const [model, setModel] = useState({});
  const [courceStatus, setCourceStatus] = useState(false);
  const [resultData, setResultData] = useState([
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC100",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC101",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC102",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC103",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC104",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC105",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC106",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC107",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC108",
      result: "Pass",
    },
    {
      name: "ABC",
      marks: 80,
      rollNum: "ABC109",
      result: "Pass",
    },
  ]);
  const [resultTableData, setResultTableData] = useState([]);

  let submitForm = () => {
    model.isShowResult = courceStatus;
    model.result = resultData;
    console.log(model);
    sendData(model, "results")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let getResultData = () => {
    getData("results")
      .then((res) => {
        console.log(res);
        setResultTableData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getResultData();
  }, []);

  return (
    <>
      <h1>Create Result</h1>
      <Box sx={{ padding: 2 }}>
        <Grid container>
          <Grid md={6} item>
            <Switch
              value={courceStatus}
              onChange={(e) => setCourceStatus(e.target.checked)}
              label="Cource"
            />
          </Grid>
          <Grid md={6} item>
            <Select
              label="Cource"
              onChange={(e) => setModel({ ...model, cource: e.target.value })}
              datasource={[
                {
                  id: "wm",
                  fullName: "Web And Mobile",
                },
                {
                  id: "gd",
                  fullName: "Graphics Designing",
                },
              ]}
            />
          </Grid>
          <Grid item md={12}>
            <Box>
              <table>
                {resultData.map((x, i) => (
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.rollNum}</td>
                    <td>{x.result}</td>
                    <td>{x.marks}</td>
                  </tr>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid md={6} item>
            <Button label="Submit" onClick={submitForm} />
          </Grid>
        </Grid>
        <Box>
          <table>
            {resultTableData.map((x, i) => (
              <tr>
                <td>{x.result.length}</td>
                <td>
                  <Select
                    valuefield="id"
                    displayField="fullName"
                    value={x.cource}
                    datasource={[
                      {
                        id: "wm",
                        fullName: "Web And Mobile",
                      },
                      {
                        id: "gd",
                        fullName: "Graphics Designing",
                      },
                    ]}
                  />{" "}
                </td>
                <td>
                  <Switch
                    onChange={(e) => {
                      resultTableData[i].isShowResult = e.target.checked;
                    }}
                    value={x.isShowResult}
                  />
                </td>
              </tr>
            ))}
          </table>
        </Box>
      </Box>
    </>
  );
}
export default CreateResult;