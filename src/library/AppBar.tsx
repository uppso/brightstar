import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import React from "react";
import logo from "../assets/brightstarlogo.svg";

export function AppBar() {
  return (
    <MuiAppBar sx={(theme) => ({ background: "transparent" })} elevation={0}>
      <Toolbar sx={{ justifyContent: "center", py: 1.5 }}>
        <img src={logo} alt="Bright Star Logo" height={52} />
      </Toolbar>
    </MuiAppBar>
  );
}
