import { useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import cloud from "../assets/cloud.svg";

export function Cloud() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <motion.img
      src={cloud}
      alt="cloud"
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
      variants={{
        hidden: {
          y: 150,
          opacity: 0,
        },
        show: {
          y: isDesktop ? 50 : -60,
          opacity: 1,
        },
        exit: {
          y: 150,
          opacity: 0,
        },
      }}
    />
  );
}
