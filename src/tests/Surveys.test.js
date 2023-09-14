import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import Surveys from "../pages/Surveys";

// Mock the LevelSelector component
jest.mock("../components/LevelSelector", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mock-level-selector">Mock Level Selector</div>,
  };
});

expect.extend({ toBeInTheDocument }); 

// Run the 2 actual tests
describe("Surveys.jsx", () => {
  // First test
  it("renders the Surveys component with default Level4", () => {
    const { getByText} = render(<Surveys />);

    // Check if the component renders with the default level
    expect(getByText("Please select Level")).toBeInTheDocument();
    expect(getByText("Level 4")).toBeInTheDocument();
    expect(getByText("Question 1/6")).toBeInTheDocument();
    expect(getByText("How do you estimate the difficulty of these modules?")).toBeInTheDocument();

    // Check if the "Next Question" button is present
    expect(getByText("Next Question")).toBeInTheDocument();
  });

  // Second test
  it("allows navigation between questions", () => {
    const { getByText } = render(<Surveys />);

    // Click the "Next Question" button
    fireEvent.click(getByText("Next Question"));

    // Check if the question number updates
    expect(getByText("Question 2/6")).toBeInTheDocument();

    // Click the "Back" button
    fireEvent.click(getByText("Back"));

    // Check if the question number goes back to 1
    expect(getByText("Question 1/6")).toBeInTheDocument();
  })
});