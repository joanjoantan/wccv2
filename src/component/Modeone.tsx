import React, { useState } from "react";

const ModeOne: React.FC = () => {
  const calculateMidpoint = ({ min, max }: { min: number; max: number }) => {
    return Math.floor((min + max) / 2);
  };

  const [range, setRange] = useState({ min: 1, max: 10000 });

  const [computerGuess, setComputerGuess] = useState(calculateMidpoint(range));
  const [message, setMessage] = useState(
    "Think of a number between 1 and 10,000"
  );

  const handleUserResponse = (response: string) => {
    const newRange = updateRange(response, range, computerGuess);
    setRange(newRange);
    setComputerGuess(calculateMidpoint(newRange));
    updateMessage(response);
  };

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

  const updateMessage = (response: string) => {
    if (response === "3") {
      setMessage(`Great! I guessed your number, which is ${computerGuess}.`);
    }
  };

  const handleStart = () => {
    setRange({ min: 1, max: 10000 });
    setComputerGuess(calculateMidpoint({ min: 1, max: 10000 }));
    setMessage("Think of a number between 1 and 10,000");
  };

  const renderGuessButtons = () => {
    if (
      message !== `Great! I guessed your number, which is ${computerGuess}.`
    ) {
      return (
        <div>
          <p>Is your number {computerGuess}?</p>
          <button onClick={handleStart}>Restart</button>
          <button onClick={() => handleUserResponse("1")}>Too low</button>
          <button onClick={() => handleUserResponse("2")}>Too high</button>
          <button onClick={() => handleUserResponse("3")}>Correct</button>
        </div>
      );
    }
  };

  return (
    <div>
      <p>{message}</p>
      {renderGuessButtons()}
    </div>
  );
};

export default ModeOne;
