import { render, screen } from "@testing-library/react";
import React from "react";
import { Earth } from "./Earth";

test("renders the App bar", () => {
  render(<Earth />);
  const linkElement = screen.getByAltText(/earth/i);
  expect(linkElement).toBeInTheDocument();
});
