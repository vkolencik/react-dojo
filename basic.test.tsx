import React from "react";
import { it } from "vitest";
import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

it('renders', () => {
  const screen = render(<div><button>press</button></div>);
  const btn = screen.getByRole('button', {name: /press/});
  userEvent.click(btn);  
});
