import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import spaceman from "../assets/spaceman.svg";

/**
 * User error screen
 * @see https://reactjs.org/docs/error-boundaries.html
 * @see https://www.framer.com/motion/
 * @returns JSX.Element
 */
function SpacemanErrorScreen() {
  return (
    <Container sx={{ py: 3, textAlign: "center" }}>
      <motion.img
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        src={spaceman}
        alt="Bright Star Spaceman"
        height={400}
      />
      <Typography variant="h1">Oops.</Typography>
      <Typography variant="body1">
        Something went wrong and needs fixing.
      </Typography>
    </Container>
  );
}

/**
 * Error Boundary
 * @see https://reactjs.org/docs/error-boundaries.html
 */
export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
  }

  render() {
    if ((this.state as any).hasError) {
      // You can render any custom fallback UI
      return <SpacemanErrorScreen />;
    }

    return (this.props as any).children;
  }
}
