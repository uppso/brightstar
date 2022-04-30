import { render, screen } from "@testing-library/react";
import React from "react";
import { Planets } from "./Planets";

test("renders a groups of planets", () => {
  render(
    <Planets>
      <div></div>
    </Planets>
  );
  const linkElement = screen.getByTestId(/planets/i);
  expect(linkElement).toBeInTheDocument();
});
