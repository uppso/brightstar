import { render, screen } from "@testing-library/react";
import React from "react";
import { AppBar } from "./AppBar";

it("renders the App Bar", () => {
  render(<AppBar />);
  const linkElement = screen.getByAltText(/Bright Star Logo/i);
  expect(linkElement).toBeInTheDocument();
});
