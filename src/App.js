import "./App.css";
import Letter from "./Components/Letter/Letter";

function App() {
  let abecedary = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <>
      <div class="container">
        <header className="header">
          <h1 className="main-title">THE HANGMAN</h1>
        </header>
        <main className="game">
          <div className="gameboard">
            <section className="hangman"></section>
            <div className="abecedary">
              {abecedary.map((letter) => (
                <Letter text={letter.toUpperCase()} />
              ))}
            </div>
          </div>
          <ul className="game__word"></ul>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
