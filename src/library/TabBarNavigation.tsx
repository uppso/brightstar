import HomeIcon from "@mui/icons-material/Home";
import RatingIcon from "@mui/icons-material/RateReview";
import ShowcaseIcon from "@mui/icons-material/Star";
import BottomNavigation from "@mui/material/BottomNavigation";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: #89b2f4;
  &.Mui-selected {
    color: #ffeb5c;
  }
`);

const navigation = [
  {
    to: "/",
    label: "Home",
    icon: <HomeIcon />,
  },
  {
    to: "/task",
    label: "Task",
    icon: <RatingIcon />,
  },
  {
    to: "/showcase",
    label: "Showcase",
    icon: <ShowcaseIcon />,
  },
];

export function TabBarNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const value = navigation.findIndex((n) => n.to === location.pathname);

  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        py: 2,
        background: "rgba(0,0,30,0.97)",
      })}
      data-testid="tab"
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event) => {
          navigate(event.currentTarget.getAttribute("data-location") || "/");
        }}
        sx={{ background: "transparent" }}
      >
        {navigation.map(({ to, label, icon }) => (
          <BottomNavigationAction
            key={to}
            data-location={to}
            label={label}
            icon={icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
