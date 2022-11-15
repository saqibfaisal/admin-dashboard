import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Navbar from "../component/navber";

function Profile() {
  return (
    <div>
      <Navbar />
      <Box>
        <Grid container spacing={2}>
          <Box
            sx={{
                width: "100%",
              p: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item md={6} >
              <Paper>
                <Box
                sx={{
                    mr: 10,
                  p: 3,
                  borderRadius:'15px'
                }}
                >
                  <Box
                    sx={{
                      // justifyContent: "center",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      style={{ borderRadius: "15px" }}
                      src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80.jpg"
                      height="100px"
                      width="100px"
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{ ml: 4, fontWeight: "bold", fontSize: "26px" }}
                      >
                        User
                      </Typography>
                      <Typography variant="body1" sx={{ ml: 4, color: "gray" }}>
                       Frontent Developer
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      mt: 3,
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ ml: 4, textDecoration: "underline" }}
                    >
                      About
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ ml: 4, width: "100%", color: "grey" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean viverra molestie dui ac consectetur. Maecenas felis
                      ligula, porttitor ultricies augue vitae, cursus laoreet
                      ante. Aenean id libero euismod, hendrerit dui ut, sodales
                      mi. Integer ut
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default Profile;
