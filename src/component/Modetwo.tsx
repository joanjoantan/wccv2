import React, { useState } from "react";
import {
  messageInvalid,
  messageTooHigh,
  messageTooLow,
  messageCongratulations,
  minNum,
  maxNum,
} from "../utils/Helpers";

const ModeTwo: React.FC = () => {
  const min = minNum;
  const max = maxNum;

  // Initialize state variables
  const [computerMysteryNumber] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );
  const [yourGuess, setYourGuess] = useState("");
  const [messageModeTwo, setMessageModeTwo] = useState("");

  // State variable to toggle text visibility
  const [isTextVisible, setIsTextVisible] = useState(false);

  // Function to handle the submission of a guess
  const handleSubmitGuess = () => {
    compareValue(
      yourGuess,
      computerMysteryNumber.toString(),
      "computer random number",
      setMessageModeTwo
    );
  };

  // Function to compare the user's guess with the computer's mystery number
  const compareValue = (
    guess: string,
    generated: string,
    specialMessage: string,
    setMessageFn: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const guessValue = parseInt(guess, 10);
    const generatedValue = parseInt(generated, 10);

    if (isNaN(guessValue)) {
      setMessageFn(messageInvalid);
    } else if (guessValue === generatedValue) {
      setMessageFn(`${messageCongratulations} ${specialMessage} ${generated}!`);
    } else if (guessValue < generatedValue) {
      setMessageFn(messageTooLow);
    } else {
      setMessageFn(messageTooHigh);
    }
  };

  // Function to handle changes in the user's guess input field
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setStateFn: React.Dispatch<React.SetStateAction<string>>,
    clearMessageFn?: React.Dispatch<React.SetStateAction<string>>
  ) => {
    clearMessageFn && clearMessageFn(""); // Clear the message if the clearMessageFn is provided

    const value = parseInt(e.target.value, 10);

    if (!isNaN(value) && value >= min && value <= max) {
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
        number between {min} and {max}:
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
