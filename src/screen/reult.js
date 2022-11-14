import {
    Card,
    CardContent,
    CircularProgress,
    Grid,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useEffect, useState } from "react";
  import "../App.css";
  import CSDataGrid from "../Components/CSDataGrid";
  import CSDropDown from "../Components/CSDropDown";
  import CSTextField from "../Components/CSTextField";
  import Navbar from "../Components/Navbar";
  import { getData } from "../Config/firebasemethods";
  
  function Results() {
    const [data, setData] = useState([]);
    const [fullpageloader, setfullpageloader] = useState(false);
    const [selectedCource, setSelectedCource] = useState("");
    const [resultTableData, setResultTableData] = useState([]);
  
    // const columns = [
    //   {
    //     field: "name",
    //     headerName: "Roll No",
    //     width: 200,
    //     heeaderClassName: "tabel-header",
    //   },
    // ];
    useEffect(() => {
      setfullpageloader(true);
      getData("Results")
        .then((res) => {
          setfullpageloader(false);
          let arr = res.filter((x) => x.isShowResult);
          console.log(arr);
          setData([...arr]);
        })
        .catch((err) => {
          setfullpageloader(false);
          console.log(err);
        });
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
    return fullpageloader ? (
      <Box sx={{ ml: 50 }}>
        <CircularProgress sx={{ width: "70%" }} size="250px" />
        <h1>Getting Data Thank you for your patience ....</h1>
      </Box>
    ) : (
      <div>
        <Navbar />
        <div className="box">
          <Box sx={{ p: 2, width: "87vw" }}>
            <Box sx={{ py: 3 }}>
              <Typography variant="h3" sx={{ py: 1.5}} align="center">
                Results
              </Typography>
              <Box
                sx={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                  p: 3,
                  borderRadius: "15px",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item md={6}>
                    <CSDropDown
                      label="Course"
                      valueField="course"
                      displayField="course"
                      onChange={(e) => showResult(e.target.value)}
                      datasource={data}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <CSTextField
                      label="Enter Roll Number"
                      onChange={(e) => showrollno(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
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
            </Box>
          </Box>
        </div>
      </div>
    );
  }
  
  export default Results;