import React from "react";
import Overview from "../Components/Elements/Overview";
import Grid from "@mui/material/Grid";
import Dashboard from "../Components/layouts/Dashboard";
import Header from "../Components/layouts/Header";
import Recentdeclaration from "../Components/Elements/Recentdeclaration";

function Home(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={6} md={3}>
          <div>
            <Dashboard />
          </div>
        </Grid>
        <Grid item xs={6} md={8.5}>
          <div>
            <Header name={props.name}/>
            <Overview />
            <Recentdeclaration />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
