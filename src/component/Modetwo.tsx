import React, { useState } from "react";

const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const messageTooHigh = "Too high! Try a lower number.";
const messageTooLow = "Too low! Try a higher number.";
const messageInvalid = "Please enter a valid number.";
const messageCongratulations = "Congratulations! You guessed the";

const ModeTwo: React.FC = () => {
  const minNumber = 1;
  const maxNumber = 10000;

  // State specific to Mode 1
  const [userGuess, setUserGuess] = useState("");
  const [userThink, setUserThink] = useState("");

  // State specific to Mode 2
  const [Mode2, setMode2] = useState(false);
  const [computerMysteryNumber, setComputerMysteryNumber] = useState(
    generateRandomNumber(minNumber, maxNumber)
  );
  const [yourGuess, setYourGuess] = useState("");
  const [messageModeTwo, setMessageModeTwo] = useState("");

  // Mode 2: Define a state variable to track the visibility of the computerMysteryNumber
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleSubmitGuess = () => {
    handleModeTwoGuess();
  };

  const compareValue = (
    guess: string,
    think: string,
    specialMessage: string,
    setMessageFn: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const guessValue = parseInt(guess, 10);
    const thinkValue = parseInt(think, 10);

    if (isNaN(guessValue)) {
      setMessageFn(messageInvalid);
    } else if (guessValue === thinkValue) {
      setMessageFn(`${messageCongratulations} ${specialMessage} ${think}!`);
      setMode2(true);
    } else if (guessValue < thinkValue) {
      setMessageFn(messageTooLow);
    } else {
      setMessageFn(messageTooHigh);
    }
  };

  const handleModeTwoGuess = () => {
    compareValue(
      yourGuess,
      computerMysteryNumber.toString(),
      "computer random number",
      setMessageModeTwo
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setStateFn: React.Dispatch<React.SetStateAction<string>>,
    clearMessageFn?: React.Dispatch<React.SetStateAction<string>>
  ) => {
    clearMessageFn && clearMessageFn(""); // Clear the message if the clearMessageFn is provided

    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value >= minNumber && value <= maxNumber) {
      setStateFn(value.toString());
    } else {
      setStateFn("");
    }
  };

  const handleModeTwoGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setYourGuess, setMessageModeTwo);
  };

  // Create a function to toggle the visibility
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <>
      <h2>Mode 2</h2>
      <p>
        The computer generates a random number (
        <i onClick={toggleTextVisibility}>toggle computer mystery number</i>
        {isTextVisible && <b> - {computerMysteryNumber}</b>}), you guess a
        number between {minNumber} and {maxNumber}:
      </p>
      You guess a number:{" "}
      <input
        type="number"
        value={yourGuess}
        onChange={handleModeTwoGuessChange}
        placeholder="Enter your guess"
      />
      <h3>{messageModeTwo}</h3>
      <button onClick={handleSubmitGuess}>Submit Guess</button>
    </>
  );
};

export default ModeTwo;
