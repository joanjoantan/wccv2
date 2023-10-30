import NumberGuessGame from "./component/Modeone";

const App: React.FC = () => {
  return (
    <div className="App" data-testid="number-guess-game">
      <h1>Number Guessing Game</h1>
      <NumberGuessGame />
    </div>
  );
};

export default App;
