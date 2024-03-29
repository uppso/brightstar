import { Box } from "@mui/material";
import { motion } from "framer-motion";

export interface StageParams {
  background: string;
  children?: JSX.Element[] | JSX.Element;
}

/**
 * Stage
 * A full height div that takes up the full viewport
 * and zooms in and out on load using framer-motion
 * @param StageParams background and optional children
 * @returns
 */
export function Stage({ background, children }: StageParams) {
  return (
    <Box
      sx={{
        overflow: "hidden",
        minHeight: "100vh",
        position: "relative",
      }}
      data-testid="stage"
    >
      <motion.div
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{
          default: {
            duration: 0.3,
          },
        }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          show: {
            opacity: 1,
            scale: 1,
          },
          exit: { opacity: 0 },
        }}
        style={{
          minHeight: "100vh",
          background,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            overflow: "hidden",
            minHeight: "100vh",
            position: "relative",
            backdropFilter: "blur(2px)",
          }}
        >
          {children}
        </Box>
      </motion.div>
    </Box>
  );
}
