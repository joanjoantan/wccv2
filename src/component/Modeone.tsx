import React, { useState } from "react";

const NumberGuessGame: React.FC = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  const [computerGuess, setComputerGuess] = useState(
    Math.floor((min + max) / 2)
  );
  const [message, setMessage] = useState(
    "Think of a number between 1 and 10,000."
  );

  const handleUserResponse = (response: string) => {
    updateMinMax(response);
    updateMessage(response);
    setComputerGuess(Math.floor((min + max) / 2));
  };

  const updateMinMax = (response: string) => {
    if (response === "1") {
      setMin(computerGuess + 1);
    } else if (response === "2") {
      setMax(computerGuess - 1);
    }
  };

  const updateMessage = (response: string) => {
    if (response === "3") {
      setMessage(`Great! I guessed your number, which is ${computerGuess}.`);
    }
  };

  const renderGuessButtons = () => {
    if (
      message !== `Great! I guessed your number, which is ${computerGuess}.`
    ) {
      return (
        <div>
          <p>Is your number {computerGuess}?</p>
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

export default NumberGuessGame;
