import React from 'react';
import { render } from '@testing-library/react';
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import Resources from '../pages/Resources';

expect.extend({ toBeInTheDocument }); 


describe('Resources component', () => {
  it('renders without crashing', () => {
    render(<Resources />);
  });
  // First Test
  it('displays "Please select Level and Module" message', () => {
    const { getByText } = render(<Resources />);
    const message = getByText('Please select Level and Module');
    expect(message).toBeInTheDocument();
  });
  // Second Test
  it('displays level and module selectors', () => {
    const { getAllByRole, getByLabelText } = render(<Resources />);
    const levelSelector = getAllByRole('combobox');
    const moduleSelector = getAllByRole('combobox');
    levelSelector.forEach((select) => {
        expect(select).toBeInTheDocument();
      });
    
      moduleSelector.forEach((select) => {
        expect(select).toBeInTheDocument();
      });
  });
});