import {Box, Rating, styled} from "@mui/material";
import {StarRatingIcon} from "./StarRatingIcon";
import {StarRatingIconEmpty} from "./StarRatingIconEmpty";


const colors = ["#8C9BA6", "#ff0000", "#ff7c00", "#ffce00", "#46d100", "#00b776"];

const StyledRating = styled(Rating)(({theme}) => ({
  '& .MuiRating-icon': {
    margin:theme.spacing(0.5),
  },
}));


export interface StarRatingProps {
  value: number;
  onChange: (value: number) => void;
}

/**
 * Rating Component
 * Used to give user feedback and display.
 * @param props RatingProps
 * @returns
 */
export function StarRating(props: StarRatingProps) {
  const fill =  colors[props.value];
  return (
    <Box
      data-testid="rating"
    >
      <StyledRating
          icon={<StarRatingIcon fill={fill}/>}
          emptyIcon={<StarRatingIconEmpty/>}
          onChange={(event, newValue) => {
            props.onChange(newValue ?? 0);
          }}
      />
    </Box>
  );
}
