import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NumberGuessGame from "./Modeone";

describe("NumberGuessGame", () => {
  it("renders the initial message", () => {
    render(<NumberGuessGame />);
    const messageElement = screen.getByText(
      "Think of a number between 1 and 10,000."
    );
    expect(messageElement).toBeInTheDocument();
  });

  it("renders the guess buttons when not yet guessed correctly", () => {
    render(<NumberGuessGame />);
    const tooLowButton = screen.getByText("Too low");
    const tooHighButton = screen.getByText("Too high");
    const correctButton = screen.getByText("Correct");

    expect(tooLowButton).toBeInTheDocument();
    expect(tooHighButton).toBeInTheDocument();
    expect(correctButton).toBeInTheDocument();
  });

  it("updates the message and re-renders guess buttons when 'Correct' is clicked", () => {
    const { container } = render(<NumberGuessGame />);
    const correctButton = screen.getByText("Correct");

    fireEvent.click(correctButton);

    const messageElement = screen.getByText(
      /Great! I guessed your number, which is \d+\./
    );
    const guessButtons = container.querySelectorAll("button");

    expect(messageElement).toBeInTheDocument();
    expect(guessButtons).toHaveLength(0);
  });

  it("updates the message and re-renders guess buttons when 'Too low' or 'Too high' is clicked", () => {
    const { container } = render(<NumberGuessGame />);
    const tooLowButton = screen.getByText("Too low");
    const tooHighButton = screen.getByText("Too high");

    fireEvent.click(tooLowButton);

    let messageElement = screen.queryByText(
      "Think of a number between 1 and 10,000."
    );
    expect(messageElement).toBeInTheDocument();

    fireEvent.click(tooHighButton);

    messageElement = screen.queryByText(
      "Think of a number between 1 and 10,000."
    );
    expect(messageElement).toBeInTheDocument();
  });
});
