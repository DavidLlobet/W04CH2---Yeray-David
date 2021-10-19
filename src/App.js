import { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div class="container">
        <header className="header">
          <h1 className="main-title">THE HANGMAN</h1>
        </header>
        <main className="game">
          <div className="gameboard">
            <section className="hangman"></section>
            <ul className="abecedary">
              <li className="abecedaryletter"></li>
            </ul>
          </div>
          <ul className="game__word"></ul>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
