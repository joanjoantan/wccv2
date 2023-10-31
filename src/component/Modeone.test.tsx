import { render, screen, fireEvent } from "@testing-library/react";
import ModeOne from "./Modeone";

describe("ModeOne Component", () => {
  test("renders the component with initial message and buttons", () => {
    render(<ModeOne />);

    const initialMessage = screen.getByText(
      "Think of a number between 1 and 10,000"
    );
    expect(initialMessage).toBeInTheDocument();

    const restartButton = screen.getByText("Restart");
    expect(restartButton).toBeInTheDocument();

    const tooLowButton = screen.getByText("Too low");
    expect(tooLowButton).toBeInTheDocument();

    const tooHighButton = screen.getByText("Too high");
    expect(tooHighButton).toBeInTheDocument();

    const correctButton = screen.getByText("Correct");
    expect(correctButton).toBeInTheDocument();
  });

  test("restarts the game when restart button is clicked", () => {
    render(<ModeOne />);

    const restartButton = screen.getByText("Restart");
    fireEvent.click(restartButton);

    const restartMessage = screen.getByText(
      "Think of a number between 1 and 10,000"
    );
    expect(restartMessage).toBeInTheDocument();
  });

  test("updates the message and mode when the correct button is clicked", () => {
    render(<ModeOne />);

    const correctButton = screen.getByText("Correct");
    fireEvent.click(correctButton);

    const messageElement = screen.getByText(/Great! I guessed your number/);
    expect(messageElement).toBeInTheDocument();

    const restartButton = screen.getByText("Restart games");
    expect(restartButton).toBeInTheDocument();
  });

  test("updates the range and message when too low button is clicked", () => {
    render(<ModeOne />);
    const tooLowButton = screen.getByText("Too low");
    fireEvent.click(tooLowButton);

    const newMessage = screen.getByText(/Is your number/);
    expect(newMessage).toBeInTheDocument();
  });

  test("updates the range and message when too high button is clicked", () => {
    render(<ModeOne />);
    const tooHighButton = screen.getByText("Too high");
    fireEvent.click(tooHighButton);

    const newMessage = screen.getByText(/Is your number/);
    expect(newMessage).toBeInTheDocument();
  });
});
