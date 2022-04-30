import { Container, Typography } from "@mui/material";
import React from "react";
import { Cloud } from "../../library/Cloud";
import { Earth } from "../../library/Earth";
import { Rocket } from "../../library/Rocket";
import { Stage } from "../../library/Stage";

export default function ShowcasePage() {
  return (
    <Stage background="linear-gradient(#7b68cf,#9989DD)">
      <Container maxWidth="sm" sx={{ zIndex: 10 }}>
        <Typography variant="h1">Showcase</Typography>
        <Typography variant="body1" gutterBottom>
          Impress us with your work. Customise a part of this page, explain what
          you've done and why. (Optional)
        </Typography>
      </Container>
      <Earth />
      <Rocket />
      <Cloud />
    </Stage>
  );
}
