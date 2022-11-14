import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { display } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import Button from "../../component/button";
import Dashboard from "../../component/dashboard";
import Input from "../../component/input";
import Select from "../../component/select";
import { sendData } from "../../config/firebasemethod";
function AdminQuiz() {
  const [isCreateQuiz, setIsCreateQuiz] = useState(false);
  const [optionsArr, setOptionsArr] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [model, setModel] = useState({});
  const [question, setQuestion] = useState({});
  const [option, setOption] = useState("");
  // let Navigate = useNavigate();

  let fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
    // console.log(model);
  };
  let coursedata = () => {
    sendData(model, "quiz")
      .then((success) => {
        console.log(success);
        // Navigate("/adminquiz")
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(model);
  };
  let arr = [
    {
      id: 1,
      display: "Web and App",
    },
    {
      id: 2,
      display: "Graphic Design",
    },
    {
      id: 3,
      display: "BlockChain",
    },
  ];
  let createQuiz = () => {
    setIsCreateQuiz(true);
  };
  let addOption = () => {
    setOptionsArr([...optionsArr, option]);
  };
  return (
    <div className="adminbg box">
      <Dashboard   heading={"Institute"}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ p: 2, width: "50%" }}>
          <Box
            sx={{
              border: "2px solid white",
              borderRadius: "25px",
              p: 3,
              textAlign: "center",
            }}
          >
            <Typography color="inherit" variant="h4">
              Quiz
            </Typography>
            <Grid container spacing={2} sx={{ pt: 5 }}>
              <Grid item md={6}>
                <Input
                  label="Quiz name"
                  onChange={(e) => fillModel("question", e.target.value)}
                  disabled={isCreateQuiz}
                />
              </Grid>

              <Grid md={6} item>
                <Input
                  onChange={(e) => fillModel("duration", e.target.value)}
                  disabled={isCreateQuiz}
                  label="Quiz Duration"
                />
              </Grid>
              <Grid md={6} item>
                <Select
                  onChange={(e) => fillModel("course", e.target.value)}
                  disabled={isCreateQuiz}
                  datasource={[
                    {
                      id: "wm",
                      fullName: "Web And Mobile",
                    },
                    {
                      id: "gd",
                      fullName: "Graphic disgn",
                    },
                    {
                      id: "Blockchain",
                      fullName: "Blockchain",
                    },
                  ]}
                />
              </Grid>
              <Grid md={12} item>
                <Box>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={createQuiz}
                    label="Create Quiz"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                mt: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isCreateQuiz && (
                <Grid container>
                  <Grid md={12} item sx={{ mb: 3 }}>
                    <Input
                      onChange={(e) => {
                        setQuestion({ ...question, question: e.target.value });
                      }}
                      label="Question"
                    />
                  </Grid>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid md={612} item>
                      <Input
                        onChange={(e) => setOption(e.target.value)}
                        label="Option"
                      />
                    </Grid>
                    <Button
                      width="10px"
                      variant="contained"
                      onClick={addOption}
                      label="add"
                      sx={{ mr: 5 }}
                    />
                  </Box>
                  <Box>
                    {optionsArr.map((x, i) => (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Checkbox
                          onChange={(e) => (x.isChecked = e.target.value)}
                        />{" "}
                        <Typography key={i}>{x}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Grid md={12} item>
                    <Button variant="contained" label="Submit Question" />
                    <Button variant="contained" label="Lock Quiz" />
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default AdminQuiz;
