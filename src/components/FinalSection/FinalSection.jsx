import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function FinalSection() {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid size={8}>
            <img src="src/assets/first.jpg" alt="first" width="100%" />
          </Grid>
          <Grid
            size={8}
            sx={{
              padding: "7%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                paddingBottom: "10px",
              }}
            >
              AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                marginRight: "auto",
                paddingBottom: "20px",
              }}
            >
              Affrim Provides flexible rates and flexible terms and payment
              solutions.
            </Typography>

            <Button
              variant="contained"
              sx={{
                color: "white",
                borderColor: "black",
                backgroundColor: "black",
                marginRight: "auto",
              }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid
            size={8}
            sx={{
              padding: "7%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                paddingBottom: "10px",
              }}
            >
              CHOOSE WITH CONFIDENCE
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                paddingBottom: "20px",
              }}
            >
              Remove the guesswork of choosing your next sofa by ordering
              online.
            </Typography>

            <Button
              variant="contained"
              sx={{
                color: "white",
                borderColor: "black",
                backgroundColor: "black",
                marginRight: "auto",
              }}
            >
              Order Swatches
            </Button>
          </Grid>
          <Grid size={8}>
            <img src="src/assets/Second.jpg" alt="second" width="100%" />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid size={8}>
            <img src="src/assets/third.jpg" alt="third" width="100%" />
          </Grid>
          <Grid
            size={8}
            sx={{
              padding: "7%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                paddingBottom: "10px",
              }}
            >
              COPMPLIMENTARY DESIGN SERVICES
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                marginRight: "auto",
                paddingBottom: "20px",
              }}
            >
              Lets create your dream space together.
            </Typography>

            <Button
              variant="contained"
              sx={{
                color: "white",
                borderColor: "black",
                backgroundColor: "black",
                marginRight: "auto",
              }}
            >
              Book a Consultation
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FinalSection;
