import { render, screen } from "@testing-library/react";
import React from "react";
import { Rating } from "./Rating";

it("renders the Task Page", () => {
  render(<Rating />);
  const linkElement = screen.getByTestId(/rating/i);
  expect(linkElement).toBeInTheDocument();
});
