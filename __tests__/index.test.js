import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../pages';

describe("Home", () => {
  it("should render", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
