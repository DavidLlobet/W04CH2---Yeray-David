import "./App.css";
import Cell from "./Components/Cell/Cell";
import Hangman from "./Components/Hangman/Hangman";
import Letter from "./Components/Letter/Letter";
import Message from "./Components/Message/Message";

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

  let words = ["pocahontas"];
  let wordSplitted = words[0].split("");

  const textMessage = "Push a letter!";

  return (
    <>
      <div className="main-container">
        <header className="main-header">
          <h1 className="main-title">THE HANGMAN</h1>
        </header>
        <main className="game">
          <div className="game__board">
            <div>
              <Message text={textMessage} />
              <section className="game__hangman">
                <Hangman />
              </section>
            </div>
            <div className="abecedary">
              {abecedary.map((letter, i) => (
                <Letter
                  key={i}
                  className="abecedary__letter"
                  text={letter.toUpperCase()}
                />
              ))}
            </div>
          </div>
          <ul className="game__word">
            {wordSplitted.map((char, i) => (
              <Cell key={i} letter={char} />
            ))}
          </ul>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
