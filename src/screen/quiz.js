import {
    Chip,
    Grid,
    LinearProgress,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import "../App.css";
  import { getData } from "../config/firebasemethod";
  import Button from "../component/button";
  import RestartAltIcon from "@mui/icons-material/RestartAlt";
  
  function QuizApp() {
    const [fullpageloader, setfullpageloader] = useState(false);
    const [Questions, setQuestions] = useState([]);
    const [data, setData] = useState([]);
    const [seconds, setSeconds] = useState(1);
    const [minutes, setMinutes] = useState();
    const [indexnumber, setindexnumber] = useState(0);
    const [score, setscore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [startQuiz, setstartQuiz] = useState(false);
    // const [loader, setloader] = useState(true);
    let location = useLocation();
    let navigate = useNavigate();
    let dt = location.state.item.e;
    // console.log(data);
    // console.log(minutes);
    // console.log(dt);
    // console.log(Questions);
  
    let getquizdata = () => {
    //   setfullpageloader(true);
      getData("quizdata")
        .then((res) => {
        //   setfullpageloader(false);
          setData(res);
          let some = res.find((x) => x.course == dt.coursename);
          setQuestions([...some.QuizDetails]);
          let somedt = res.find((x) => x.course == dt.coursename);
          setMinutes([...somedt.duration]);
        })
        .catch((err) => {
        //   setfullpageloader(false);
          console.log(err);
        });
    };
    useEffect(() => {
      getquizdata();
    }, []);
    let checkQuestion = (a, b) => {
      if (a == b) {
        setscore(score + 1);
      }
  
      if (indexnumber + 1 == Questions.length) {
        setShowResult(true);
      } else {
        setindexnumber(indexnumber + 1);
      }
    };
  
    let timer;
    useEffect(() => {
      timer = setInterval(() => {
        setSeconds(seconds - 1);
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
          if (minutes == 0) {
            setSeconds(59);
          }
        }
      }, 1000);
      if (minutes == 0 && seconds == 0) {
        clearInterval(timer);
        setShowResult(true);
      }
      return () => clearInterval(timer);
    });
    let start = () => {
      setstartQuiz(true);
    //   setloader(false);
    };
    return  (
      <div className="quizbg box">
        {showResult ? (
          <Box
            sx={{
              mt: 7,
              p: 3,
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              borderRadius: "15px",
              height: "50vh",
            }}
          >
            <Typography variant="h4" sx={{ margin: "10px", p: 1 }}>
              Report Card
            </Typography>
            <Typography variant="h5">Your Score : {score}</Typography>
            <Typography variant="h5">
              Percentage : {((score / Questions.length) * 100).toFixed(1)}%
            </Typography>
            <Typography variant="h5">Attemped Questions : {score}</Typography>
            <Typography variant="h5" sx={{ mb: 5 }}>
              Wrong Questions :{Questions.length - score}
            </Typography>
            <Button
              label={"Back TO Courses"}
              color="success"
              variant={"contained"}
              fullwidth
              onClick={() => navigate("/course")}
            />
          </Box>
        ) : null}
        {!showResult ? (
          <Box sx={{ p: 5.5, width: "100%" }}>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <Box
                  sx={{
                    p: 3,
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    borderRadius: "15px",
                    mb: 3,
                  }}
                >
                  <Typography variant="h4">{dt.coursename} Quiz</Typography>
                </Box>
              </Grid>
              <Grid item md={12}>
                <Box sx={{ p: 2, mb: 3 }}>
                  <Button
                    label={"start Quiz"}
                    color="success"
                    variant={"contained"}
                    fullwidth
                    onClick={start}
                    disabled={startQuiz}
                  />
                </Box>
                {startQuiz ? (
                  <Box
                    sx={{
                      border: "2px solid white",
                      // height:'100%',
                      borderRadius: "15px",
                      p: 5,
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    }}
                  >
                    <LinearProgress
                      variant="determinate"
                      color="inherit"
                      value={indexnumber + 1}
                      sx={{
                        height: "8px",
                        borderRadius: "10px",
                        marginBottom: "20px",
                      }}
                    />
                    <Typography variant="h5">
                      Question # {indexnumber} / {Questions.length}
                    </Typography>
                    <Box>
                      {" "}
                      <Typography sx={{ display: "flex", justifyContent: "end" }}>
                        Time {minutes < 10 ? "0" + minutes : minutes}:
                        {seconds < 10 ? "0" + seconds : seconds}
                      </Typography>{" "}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                        {Questions[indexnumber].question}
                      </Typography>
                      <Grid container spacing={2}>
                        {Questions[indexnumber].options.map((x, i) => (
                          <Grid item md={6}>
                            <Chip
                              sx={{
                                color: "white",
                                backgroundColor: "purple",
                                marginX: "10px",
                                marginY: "5px",
                              }}
                              key={i}
                              label={x}
                              onClick={() => {
                                checkQuestion(
                                  x,
                                  Questions[indexnumber].correctoption
                                );
                              }}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                ) : (
                  <Typography>Click on Button to start Quiz</Typography>
                )}
              </Grid>
            </Grid>
          </Box>
        ) : null}
      </div>
    );
  }
  
  export default QuizApp;