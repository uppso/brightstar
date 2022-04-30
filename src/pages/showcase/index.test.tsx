import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Page from "./index";

it("renders the Showcase Page", () => {
  render(
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Showcase/i);
  expect(linkElement).toBeInTheDocument();
});
