import { render, screen } from "@testing-library/react";
import React from "react";
import { Spinner } from "./Spinner";

it("renders a spinner", () => {
  render(<Spinner />);
  const linkElement = screen.getByTestId(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
