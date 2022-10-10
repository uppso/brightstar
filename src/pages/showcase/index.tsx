import { Container, Typography } from "@mui/material";
import { Cloud } from "../../library/Cloud";
import { Earth } from "../../library/Earth";
import { Rocket } from "../../library/Rocket";
import { Stage } from "../../library/Stage";

/**
 * Showcase page.
 * You can change anything about this page to
 * demonstrate your development skills with React JS.
 * @returns JSX.Element
 */
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
