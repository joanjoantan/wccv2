import NumberGuessGame from "./component/Modeone";

const App: React.FC = () => {
  return (
    <div className="App" data-testid="number-guess-game">
      <h1>Number Guessing Game</h1>
      <p className="titleName">Mode 1</p>
      <NumberGuessGame />
    </div>
  );
};

export default App;
