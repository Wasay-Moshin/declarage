import React from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PieChartIcon from "@mui/icons-material/PieChart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const signupform = () => {
    navigate("/");
  };
  return (
    <div className="dashboard">
      <div className="container-fluid ">
        <div className="de">
          <h1>DE</h1>
          <span>clarange</span>
        </div>
        <div>
          <div>
            <Button
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "black",
                mt: 2,
                mb: 1,
                ":hover": { background: "#CEEDE1" },
              }}
            >
              {" "}
              <HomeIcon sx={{ fontSize: "1.5rem", color: "#0CA668" }} />
              &nbsp; Dashboard
            </Button>
          </div>
          <div>
            <Button
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "black",
                mb: 1,
                ":hover": { background: "#CEEDE1" },
              }}
            >
              {" "}
              <SettingsRoundedIcon
                sx={{ fontSize: "1.5rem", color: "#0CA668" }}
              />
              &nbsp; Settings
            </Button>
          </div>
          <div>
            <Button
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "black",
                mb: 1,
                ":hover": { background: "#CEEDE1" },
              }}
            >
              {" "}
              <PieChartIcon sx={{ fontSize: "1.5rem", color: "#0CA668" }} />
              &nbsp; Declaratrion Status
            </Button>
          </div>
          <div>
            <Button
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "black",
                mb: 1,
                ":hover": { background: "#CEEDE1" },
              }}
            >
              {" "}
              <ManageAccountsIcon
                sx={{ fontSize: "1.5rem", color: "#0CA668" }}
              />
              &nbsp; User Setting
            </Button>
          </div>
          <div>
            <Button
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "black",
                mb: 1,
                ":hover": { background: "#CEEDE1" },
              }}
            >
              {" "}
              <AddBoxIcon sx={{ fontSize: "1.5rem", color: "#0CA668" }} />
              &nbsp; Create New
            </Button>
          </div>
          <div>
            <Button
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "black",
                mb: 1,
                ":hover": { background: "#CEEDE1" },
              }}
            >
              {" "}
              <TextSnippetIcon sx={{ fontSize: "1.5rem", color: "#0CA668" }} />
              &nbsp; Declaration
            </Button>
          </div>
          <div></div>
          <div>
            <Button
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "black",
                m: 3,
                mt: 20,
                background: "#0CA668",
                ":hover": { background: "#CEEDE1" },
              }}
              onClick={signupform}
            >
              {" "}
              Logout &nbsp;
              <LogoutIcon sx={{ fontSize: "1.5rem", color: "black" }} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
