import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Page from "./index";

it("renders the Task Page", () => {
  render(
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Developer Task/i);
  expect(linkElement).toBeInTheDocument();
});
