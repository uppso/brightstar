import { render, screen } from "@testing-library/react";
import React from "react";
import { Ratings } from "./Ratings";

it("renders the Task Page", () => {
  render(<Ratings />);
  const linkElement = screen.getByTestId(/rating/i);
  expect(linkElement).toBeInTheDocument();
});
