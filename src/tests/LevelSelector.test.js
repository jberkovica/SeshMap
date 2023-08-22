import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import LevelSelector from "../components/LevelSelector";
// Extend expect with the matcher
expect.extend({ toBeInTheDocument }); 

describe("LevelSelector", () => {
  it("renders the component with options", () => {
    // Replace with actual levels
    const levels = ["Level 1", "Level 2", "Level 3"]; 
    const { getByLabelText, getByText } = render(
      <LevelSelector selectedLevel="" onSelectLevel={() => {}} />
    );

    const selectElement = getByLabelText("Default select example");
    expect(selectElement).toBeInTheDocument();

    const defaultOption = getByText("Select Level");
    expect(defaultOption).toBeInTheDocument();

    levels.forEach((level) => {
      const option = getByText(level);
      expect(option).toBeInTheDocument();
    });
  });

  it("calls onSelectLevel when a level is selected", () => {
    const onSelectLevelMock = jest.fn();
    const { getByLabelText } = render(
      <LevelSelector selectedLevel="" onSelectLevel={onSelectLevelMock} />
    );

    const selectElement = getByLabelText("Default select example");
    fireEvent.change(selectElement, { target: { value: "Level 1" } });

    expect(onSelectLevelMock).toHaveBeenCalledWith("Level 1");
  });
});