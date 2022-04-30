import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TabBarNavigation } from "./TabBarNavigation";

it("renders the tab bar", () => {
  render(
    <BrowserRouter>
      <TabBarNavigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByTestId(/tab/i);
  expect(linkElement).toBeInTheDocument();
});
