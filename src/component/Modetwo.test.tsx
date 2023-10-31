import { render, screen, fireEvent } from "@testing-library/react";
import ModeTwo from "./Modetwo";

describe("ModeTwo Component", () => {
  test("renders the component", () => {
    render(<ModeTwo />);
    const titleElement = screen.getByText("Mode 2");
    expect(titleElement).toBeInTheDocument();
  });

  test("displays the computer mystery number when toggled", () => {
    render(<ModeTwo />);
    const toggleButton = screen.getByText("toggle computer mystery number");
    fireEvent.click(toggleButton);

    const computerNumber = screen.getByText(/-/);
    expect(computerNumber).toBeInTheDocument();
  });

  test("handles user input and submission", () => {
    render(<ModeTwo />);
    const inputElement = screen.getByPlaceholderText("Enter your guess");
    const submitButton = screen.getByText("Submit Guess");

    fireEvent.change(inputElement, { target: { value: "42" } });
    fireEvent.click(submitButton);

    const messageElement = screen.getByText("Too low! Try a higher number.");
    expect(messageElement).toBeInTheDocument();
  });

  test("displays an error message for invalid input", () => {
    render(<ModeTwo />);
    const inputElement = screen.getByPlaceholderText("Enter your guess");
    const submitButton = screen.getByText("Submit Guess");

    fireEvent.change(inputElement, { target: { value: "invalid" } });
    fireEvent.click(submitButton);

    const messageElement = screen.getByText("Please enter a valid number.");
    expect(messageElement).toBeInTheDocument();
  });
});
