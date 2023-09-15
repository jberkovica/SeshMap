import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import Home from "../pages/Home"; 


expect.extend({ toBeInTheDocument }); 


// Mocking the imported components so the test doesn't break due to their absence
jest.mock("../components/QuestionsCarousel.jsx", () => () => <div>QuestionsCarousel</div>);
jest.mock("../components/Acknowledgements.jsx", () => () => <div>AcknowledgementsCarousel</div>);

// Include the function to generate week
function currentWeek() {
    const dateFrom = new Date("2023-04-17"); 
    const dateTo = new Date();
    let w = Math.ceil((dateTo - dateFrom) / (1000 * 60 * 60 * 24 * 7));
    if (w < 1 || w > 22) {
        w = 0;
    }
    return w;
}

// Run Actual test suite
describe("Home Component", () => {
  // First test sees if the welcome message rendered
  test("renders welcome message", () => {
    const { getByText } = render(<Home />);
    
    expect(getByText("Welcome to SeshMap!")).toBeInTheDocument();
  });

  //  Checks whether the actual week is rendered
  test("displays current week", () => {
    const { getByText } = render(<Home />);
    const weekNumber = new RegExp(`^${currentWeek()}$`); 
    expect(getByText(weekNumber)).toBeInTheDocument();
  });
});