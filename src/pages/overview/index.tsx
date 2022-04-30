import {
  Button,
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import stars from "../../assets/background.svg";
import mars from "../../assets/mars.svg";
import saturn from "../../assets/saturn.svg";
import { Planet } from "../../library/Planet";
import { Planets } from "../../library/Planets";
import { Stage } from "../../library/Stage";
/**
 The homepage for this app
 * @returns React JSX.Element
 */
export default function OverviewPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stage background={`url(${stars})`}>
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
      <Container
        maxWidth="sm"
        sx={{
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <Paper
          sx={{
            textAlign: "center",
            background: "rgba(0,0,20,0.8)",
            backdropFilter: "blur(5px)",
            p: 3,
          }}
        >
          <Typography variant="h1">Hello.</Typography>
          <Typography sx={{ textShadow: "3px 3px 2px #000" }}>
            Here is a sample app for you to showcase your development skills.
            You can change any part of this app. Just tell us what you've done
            and why.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/task"
            sx={(theme) => ({
              padding: theme.spacing(2, 6),
              fontSize: 21,
              margin: theme.spacing(3, 0),
              boxShadow:
                "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.85) 0px 50px 100px -20px, rgba(0, 0, 0, 0.86) 0px 30px 60px -30px",
            })}
          >
            Get Started
          </Button>
        </Paper>
      </Container>
    </Stage>
  );
}
