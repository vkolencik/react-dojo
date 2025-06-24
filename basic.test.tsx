import React from "react";
import { expect, it } from "vitest";
import { act, render, waitFor } from '@testing-library/react';
import App from './src/App';
import userEvent from "@testing-library/user-event";

it('renders', async () => {
  const screen = await act(() => render(<App/>));
  expect(screen.getByTestId('counter').textContent).toBe('0');
  const btn = screen.getByRole('button', {name: /press/i});
  await userEvent.click(btn);
  expect(screen.getByTestId('counter').textContent).toBe('1')  
});
