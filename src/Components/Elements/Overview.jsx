import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
function Overview() {
  return (
    <div>
      <h3>Overview</h3>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3}>
          <Card sx={{background:"#CEEDE1"}}>
            <CardContent>
              <Typography sx={{ fontSize: 13, mb: 3 }} color="black">
               Total Products
              </Typography>
              <Typography variant="h5" component="div">
                100
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={3}>
          <Card sx={{background:"#CEEDE1"}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 13, mb: 3 }}
                color="black"
                gutterBottom
              >
                Decline Products 
              </Typography>
              <Typography variant="h5" component="div">
                100
              </Typography>
            </CardContent>
          </Card>
        </Grid>{" "}
        <Grid item xs={3} md={3}>
          <Card sx={{background:"#CEEDE1"}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 13, mb: 3 }}
                color="black"
                gutterBottom
              >
               Approved Products
              </Typography>
              <Typography variant="h5" component="div">
                100
              </Typography>
            </CardContent>
          </Card>
        </Grid>{" "}
        <Grid item xs={3} md={3}>
          <Card sx={{background:"#CEEDE1"}}>
            <CardContent>
              <Typography
                sx={{ fontSize: 13, mb: 3 }}
                color="black"
                gutterBottom
              >
               Under Review Product
              </Typography>
              <Typography variant="h5" component="div">
                100
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  
  );
}

export default Overview;
