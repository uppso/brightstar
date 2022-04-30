import { render, screen } from "@testing-library/react";
import React from "react";
import { Stage } from "./Stage";

it("renders a stage", () => {
  render(<Stage background="#111"></Stage>);
  const linkElement = screen.getByTestId(/stage/i);
  expect(linkElement).toBeInTheDocument();
});
