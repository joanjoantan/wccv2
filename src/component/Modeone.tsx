import React, { useState } from "react";
import { minNum, maxNum, messageThinkNumber } from "../utils/Helpers";
import Modetwo from "./Modetwo";

const ModeOne: React.FC = () => {
  // Function to calculate the midpoint of a range
  const calculateMidpoint = ({ min, max }: { min: number; max: number }) => {
    return Math.floor((min + max) / 2);
  };

  // Initialize state variables
  const [range, setRange] = useState({ min: minNum, max: maxNum });
  const [computerGuess, setComputerGuess] = useState(calculateMidpoint(range));
  const [message, setMessage] = useState(messageThinkNumber);
  const [Mode2, setMode2] = useState(false);

  // Function to handle user responses
  const handleUserResponse = (response: string) => {
    const newRange = updateRange(response, range, computerGuess);
    setRange(newRange);
    setComputerGuess(calculateMidpoint(newRange));
    updateMessage(response);
  };

  // Function to update the range based on user responses
  const updateRange = (
    response: string,
    { min, max }: { min: number; max: number },
    computerGuess: number
  ) => {
    if (response === "1") {
      return { min: computerGuess + 1, max };
    } else if (response === "2") {
      return { min, max: computerGuess - 1 };
    }
    return { min, max };
  };

  // Function to update the message based on user responses
  const updateMessage = (response: string) => {
    if (response === "3") {
      setMessage(`Great! I guessed your number, which is ${computerGuess}.`);
      setMode2(true);
    }
  };

  // Function to handle game restart
  const handleStart = () => {
    setRange({ min: minNum, max: maxNum });
    setComputerGuess(calculateMidpoint({ min: minNum, max: maxNum }));
    setMessage(messageThinkNumber);

    if (Mode2) {
      setMode2(false);
    }
  };

  // Function to render the Mode One UI elements
  const renderModeOne = () => {
    if (
      message !== `Great! I guessed your number, which is ${computerGuess}.`
    ) {
      return (
        <>
          <p>Is your number {computerGuess}?</p>
          <button onClick={handleStart}>Restart</button>
          <button onClick={() => handleUserResponse("1")}>Too low</button>
          <button onClick={() => handleUserResponse("2")}>Too high</button>
          <button onClick={() => handleUserResponse("3")}>Correct</button>
        </>
      );
    }
  };

  // Function to render the Mode Two UI elements
  const renderModeTwo = () => {
    if (Mode2) {
      return (
        <>
          <hr />
          <Modetwo />
          <button onClick={handleStart}>Restart games</button>
        </>
      );
    }
  };

  return (
    <div>
      <p>{message}</p>
      {renderModeOne()}

      {renderModeTwo()}
    </div>
  );
};

export default ModeOne;
