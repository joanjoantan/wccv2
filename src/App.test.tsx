import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(<App />);

  // Check if the "Number Guessing Game" text is in the document
  const headingElement = screen.getByText("Number Guessing Game");
  expect(headingElement).toBeInTheDocument();

  // Check if the NumberGuessGame component is rendered
  const numberGuessGameElement = screen.getByTestId("number-guess-game");
  expect(numberGuessGameElement).toBeInTheDocument();
});
