import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Page from "./index";

it("renders the Overview Page", () => {
  render(
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
