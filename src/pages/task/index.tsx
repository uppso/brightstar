import {
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import mars from "../../assets/mars.svg";
import saturn from "../../assets/saturn.svg";
import { Cloud } from "../../library/Cloud";
import { Planet } from "../../library/Planet";
import { Planets } from "../../library/Planets";
import { Stage } from "../../library/Stage";
import { Rating } from "./Rating";

function Intro() {
  return (
    <>
      <Typography variant="h1">Developer Task</Typography>
      <Typography variant="body1" color="#090919" sx={{ py: 4 }}>
        The client has asked for a Rating component,
        <br />
        similar in style and functionality to{" "}
        <Button
          variant="contained"
          target="_blank"
          href="https://uk.trustpilot.com/review/ocuplan.co.uk"
        >
          trustpilot
        </Button>
      </Typography>
    </>
  );
}

/**
 *
 * @returns React JSX.Element
 */
export default function TaskPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stage background="#fbc33d">
      <Cloud />
      <Planets>
        <Planet
          size={isDesktop ? "large" : "small"}
          img={saturn}
          position="left"
        />
        <Planet
          size={isDesktop ? "large" : "small"}
          img={mars}
          position="right"
        />
      </Planets>
      <Container maxWidth="sm" sx={{ textAlign: "center", zIndex: 10 }}>
        <Intro></Intro>
        <Rating />
      </Container>
    </Stage>
  );
}
