import { render, screen } from "@testing-library/react";
import React from "react";
import { Planet } from "./Planet";

test("renders a large planet", () => {
  render(<Planet img="non" size="large" position="left" />);
  const linkElement = screen.getByAltText(/planet/i);
  expect(linkElement).toBeInTheDocument();
});
