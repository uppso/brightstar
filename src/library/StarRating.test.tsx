import {render, screen} from "@testing-library/react";
import React from "react";
import {StarRating} from "./StarRating";

it("renders the Task Page", () => {
    render(<StarRating value={0} onChange={(value: number) => {
    return}
    }/>);
    const linkElement = screen.getByTestId(/rating/i);
    expect(linkElement).toBeInTheDocument();
});
