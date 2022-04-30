import { Star } from "@mui/icons-material";
import { Paper } from "@mui/material";

export function Rating({
  value,
  onChange,
}: {
  value?: number;
  onChange?: () => void;
}) {
  return (
    <Paper
      sx={{
        background: "#333",
        p: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
      data-testid="rating"
    >
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </Paper>
  );
}
