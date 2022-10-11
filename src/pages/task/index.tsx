import {
  Container,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import mars from "../../assets/mars.svg";
import saturn from "../../assets/saturn.svg";
import { Cloud } from "../../library/Cloud";
import { Planet } from "../../library/Planet";
import { Planets } from "../../library/Planets";
import { Stage } from "../../library/Stage";
import { Ratings } from "../../library/Ratings";

/**
 * TaskPage
 * A page containing components and a Rating component
 * that we would like you to customize.
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
        <Typography variant="h1" gutterBottom>
          Developer Task
        </Typography>
        <Paper
          sx={{
            textAlign: "center",
            background: "#f6f5e941",
            backdropFilter: "blur(5px)",
            mb: 10,
            py: 3,
          }}
        >
          <Typography variant="body1" color="#090919" gutterBottom>
            A rating component
          </Typography>
          {/* Please develop this rating component below */}
          <Ratings />
        </Paper>
      </Container>
    </Stage>
  );
}
