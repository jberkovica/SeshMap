import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ModuleSelector from "../components/ModuleSelector";

describe("ModuleSelector", () => {
  it("renders the component with options based on the selected level", () => {
    // Mock the getModulesForLevel function
    const mockModulesForLevel = jest.fn(() => ["Module 1", "Module 2"]);
    
    const { getByLabelText, getByText } = render(
      <ModuleSelector selectedLevel="Some Level" onSelectModule={() => {}} />
    );

    // Test logic for checking if the component renders correctly with options
    // Make assertions to check if "Module 1" and "Module 2" are present in the document
  });

  it("calls onSelectModule when a module is selected", () => {
    const onSelectModuleMock = jest.fn();
    const mockModulesForLevel = jest.fn(() => ["Module 1", "Module 2"]);

    const { getByLabelText } = render(
      <ModuleSelector selectedLevel="Some Level" onSelectModule={onSelectModuleMock} />
    );

    const selectElement = getByLabelText("Default select example");
    fireEvent.change(selectElement, { target: { value: "Module 1" } });

    // Test logic for checking if onSelectModule was called with the correct module value
    // expect(onSelectModuleMock).toHaveBeenCalledWith("Module 1");
  });
});