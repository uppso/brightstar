import { render, screen } from "@testing-library/react";
import React from "react";
import { Rocket } from "./Rocket";

test("renders a rocket", () => {
  render(<Rocket />);
  const linkElement = screen.getByAltText(/rocket/i);
  expect(linkElement).toBeInTheDocument();
});
