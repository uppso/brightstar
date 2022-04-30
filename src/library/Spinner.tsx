import { Fade } from "@mui/material";
import * as React from "react";

export function Spinner() {
  return (
    <Fade in>
      <div data-testid="loading" className="l"></div>
    </Fade>
  );
}
