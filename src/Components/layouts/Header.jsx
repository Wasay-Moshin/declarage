import React from "react";
import InputBase from "@mui/material/InputBase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Header(props) {
  return (
    <div>
      <div className="header">
        <div>
          <InputBase
            sx={{ mt: 4 }}
            placeholder="Search For Declaration"
            inputProps={{ "aria-label": "search for declaration" }}
          />
        </div>
        <div className="mt-4">
          <span>
            <AccountCircleIcon /> &nbsp;{props.name}
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
