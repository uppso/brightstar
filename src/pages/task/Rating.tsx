import { Star } from "@mui/icons-material";
import { Box, styled } from "@mui/material";

/**
 * Material UI
 * If you are unfamiliar with Material UI,
 * you can find some helpful documentation for the rating component here:
 * @see https://mui.com/material-ui/react-rating/
 */

/**
 * Star colors for ratings 1 -> 5
 */
const colors = ["#ff0000", "#ff7c00", "#ffce00", "#46d100", "#00b776"];

/**
 * Star wrapper.
 * A styled component that contains a translucent star
 */
const StyledStarBox = styled(Box)(({ theme }) => ({
  background: "rgba(105, 103, 98, 0.472)",
  borderRadius: 4,
  padding: theme.spacing(2),
  boxShadow: theme.shadows[1],
  lineHeight: 1,
  color: "white",
}));

/**
 * Optional props that can be passed in to the component.
 */
export interface RatingProps {
  value?: number;
  onChange?: () => void;
}

/**
 * Rating Component
 * Used to give user feedback and display.
 * @param props RatingProps
 * @returns
 */
export function Rating(props: RatingProps) {
  return (
    <Box
      data-testid="rating"
      sx={{ display: "flex", justifyContent: "center", gap: 0.4 }}
    >
      {colors.map((c) => (
        <StyledStarBox key={c}>
          <Star />
        </StyledStarBox>
      ))}
    </Box>
  );
}
