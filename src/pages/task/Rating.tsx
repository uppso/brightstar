import { Star } from "@mui/icons-material";
import { Box, styled } from "@mui/material";

/**
 * @url If you are unfamiliar with Material UI, you can find some helpful
 * documentation here: https://mui.com/material-ui/react-rating/
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
 * Optional parameters for parent control
 */
interface RatingProps {
  value?: number;
  onChange?: () => void;
}

/**
 * Rating Component is used to give user feedback and display.
 * This is a starting component outline. Use as much or as
 * little of this as you need.
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
