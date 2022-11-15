import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "../App.css";
import DataGrid from "../component/datagrid";
import DropDown from "../component/dropdonw";
import Input from "../component/input";
import Navbar from "../component/navber";
import { getData } from "../config/firebasemethod";

function Result() {
  const [data, setData] = useState([]);
  const [fullpageloader, setfullpageloader] = useState(false);
  const [selectedCource, setSelectedCource] = useState("");
  const [resultTableData, setResultTableData] = useState([]);
  let getResults = () => {
    getData("Results")
    .then((res) => {
      let arr = res.filter((x) => x.isShowResult);
      console.log(arr);
      setData([...arr]);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    getResults()
  }, []);
  let showResult = (e) => {
    setSelectedCource(e);
    let obj = data.find((x) => x.course == e);
    console.log(obj);
    setResultTableData([...obj.result]);
  };
  let showrollno = (e) => {
    setSelectedCource(e);
    let obj = data.find((x) => x.rollno == e);
    console.log(obj);
    setResultTableData([...obj.result]);
  };
  console.log(resultTableData);
  return  (
    <div>
      <Navbar />
      <div className="box">
        <Box sx={{ p: 2, width: "80%" }}>
          <Box >
            <Typography variant="h3" sx={{ py: 1.5}} align="center">
              Results
            </Typography>
            <Paper>
            <Box
              sx={{
                p: 3,
                borderRadius: "15px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item md={6}>
                  <DropDown
                    label="Course"
                    valueField="course"
                    displayField="course"
                    onChange={(e) => showResult(e.target.value)}
                    datasource={data}
                  />
                </Grid>
                <Grid item md={6}>
                  <Input
                    label="Enter Roll Number"
                    onChange={(e) => showrollno(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Box>
            </Paper>
            <Paper>
            <Box
              sx={{
                p: 3,
                borderRadius: "15px",
                mt:7
              }}
            >
              {resultTableData && resultTableData.length > 0 ? (
                resultTableData.map((x, i) => (
                  <tr key={i}>
                    <td style={{padding:'0px,10px',margin:'2px'}}>{x.rollno}</td>
                    <td style={{margin:'2px'}}>{x.name}</td>
                    <td style={{margin:'2px'}}>{x.result}</td>
                    <td style={{margin:'2px'}}>{x.marks}</td>
                  </tr>
                ))
              ) : (
                <Box
                  style={{
                    height: "50vh",
                    display: "flex",
                    justifyContentr: "center",
                    alignItems: "center",
                  }}
                >
                  <h1>No Result</h1>
                </Box>
              )}
            </Box>
            </Paper>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Result;