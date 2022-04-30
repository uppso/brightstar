import { render, screen } from "@testing-library/react";
import React from "react";
import { Cloud } from "./Cloud";

test("renders the App bar", () => {
  render(<Cloud />);
  const linkElement = screen.getByAltText(/cloud/i);
  expect(linkElement).toBeInTheDocument();
});
