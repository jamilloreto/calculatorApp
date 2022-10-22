import React, { useState } from "react";
import "./App.css";
import { evaluate } from "mathjs";

const App = () => {
  const [input, setInput] = useState<string>("");

  const handleClick = (val: string) => {
    setInput(input + val);
  };

  const handleResult = () => {
    setInput(evaluate(input));
  };

  return (
    <main className="app">
      <section className="primary">
        <article className="header">
          <div>
            <p className="calc">calc</p>
            {/*
            <div className="theme">
              <p>THEME</p>
              <div className="wrap-toggle">
                <input type="checkbox" id="toggle" className="offscreen" />
                <label htmlFor="toggle" className="switch"></label>
              </div>
            </div>
            */}
          </div>
          <input
            className="input-result"
            type="text"
            value={input}
            readOnly
            placeholder="0"
          />
        </article>
      </section>
      <section className="secondary">
        <article className="buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button
            className="del"
            onClick={() => setInput(input.substring(0, input.length - 1))}
          >
            DEL
          </button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>x</button>
        </article>
        <article className="more">
          <button className="btn-reset" onClick={() => setInput("")}>
            RESET
          </button>
          <button className="btn-same" onClick={handleResult}>
            =
          </button>
        </article>
      </section>
    </main>
  );
};

export default App;
