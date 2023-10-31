import React, { useState } from "react";
import {
  messageInvalid,
  messageTooHigh,
  messageTooLow,
  messageCongratulations,
  minNum,
  maxNum,
} from "../utils/Helpers";

// Function to generate a random number within a given range
const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ModeTwo: React.FC = () => {
  const minNumber = minNum;
  const maxNumber = maxNum;

  // Initialize state variables
  // eslint-disable-next-line
  const [computerMysteryNumber, setComputerMysteryNumber] = useState(
    generateRandomNumber(minNumber, maxNumber)
  );
  const [yourGuess, setYourGuess] = useState("");
  const [messageModeTwo, setMessageModeTwo] = useState("");

  // State variable to toggle text visibility
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Function to handle the submission of a guess
  const handleSubmitGuess = () => {
    handleModeTwoGuess();
  };

  // Function to compare the user's guess with the computer's mystery number
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
    } else if (guessValue < thinkValue) {
      setMessageFn(messageTooLow);
    } else {
      setMessageFn(messageTooHigh);
    }
  };

  // Function to handle the user's guess
  const handleModeTwoGuess = () => {
    compareValue(
      yourGuess,
      computerMysteryNumber.toString(),
      "computer random number",
      setMessageModeTwo
    );
  };

  // Function to handle changes in the user's guess input field
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

  // Function to handle changes in the user's guess input field
  const handleModeTwoGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e, setYourGuess, setMessageModeTwo);
  };

  // Function to toggle the visibility of the computer's mystery number
  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <>
      <p className="titleName">Mode 2</p>
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
      />{" "}
      <button onClick={handleSubmitGuess}>Submit Guess</button>
      <h3 className="message">{messageModeTwo}</h3>
    </>
  );
};

export default ModeTwo;
