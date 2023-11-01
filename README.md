# Number Guessing Game

Welcome to the Number Guessing Game! This is a simple React application where the computer tries to guess a number you're thinking of within a specified range.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine:

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to play the game.

## How to Play

1. The computer will guess a number within a given range (default is 1 to 10,000).
2. You respond with one of the following options:

- "Too low" if the computer's guess is too low.
- "Too high" if the computer's guess is too high.
- "Correct" if the computer guessed your number.

3. The game continues until the computer correctly guesses your number.

Have fun playing the Number Guessing Game!

### Technologies Used

The Number Guessing Game is built using the following technologies:

- React: A JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/joanjoantan/wcc.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd wcc

   ```

3. Install the project dependencies:

   ```bash
   yarn install

   ```

### Usage

Start the development server:

```bash
yarn start
```

Open your web browser and go to http://localhost:3000 to play the game.

### Running Tests

To run tests for the app, use the following command:

```bash
yarn test
```

### Assumptions Made

I am made the following assumptions during the development of this game:

- The game assumes the player will think of a number within the provided range.
- The computer guesses numbers randomly within the specified range and relies on player feedback to refine its guesses.
- The player responds with "Too low," "Too high," or "Correct" for each guess.
- The game provides feedback based on the player's responses.

### Further Improvements

Given more time, here are some potential improvements that could be made to the app:

1. User Interface Enhancements: Improve the user interface by adding animations, better styling, or additional user feedback features.

2. Difficulty Levels: Implement different difficulty levels with varying number ranges and computer guessing strategies.

3. Multiplayer Mode: Add a multiplayer mode where two players can take turns guessing numbers.
