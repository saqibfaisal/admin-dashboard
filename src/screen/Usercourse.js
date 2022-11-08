import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { getData } from "../config/firebasemethod";
import { useEffect, useState } from "react";
import Navber from "../component/navber";
function Course() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    getData("Courses")
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
    <Navber/>
  {/* workarea={ */}
  <Box sx={{ p: 1.5 }}>
            <Grid container spacing={3}>
              {data.map((e) => (
                <Grid item md={4}>
                  <Card sx={{ minWidth: 275 ,margin:5}}>
                    <CardContent sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                    <Typography variant="h6" align="center">{e.coursename}</Typography>
                      <Typography variant="body1" align="center" >Duration : {e.duration} months</Typography>
                      <Typography variant="body1" align="center">Fees : {e.fee} Rs</Typography>
                      <Typography variant="body1" align="center">No Of Quizes : {e.noofquiz}</Typography>
                      <Typography variant="body1" align="center">LeadTrainer : {e.leadtrainer}</Typography>
                      <Typography variant="p" align="center">Assistants : {e.assistant_1},{e.assistant_2}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
  </>
  );
}
export default Course;
