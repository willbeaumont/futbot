import { useState } from "react";
import "./App.css";
import { Button, DialogBox, UserInput } from "./ComponentsTest.js";

function App() {
  const [convo, setConvo] = useState([]);
  const [context, setContext] = useState([]);
  
  function getfDialogflow(e) {
    e.preventDefault();
    
    const question = e.target.question.value;
    e.target.question.value = "";
    setConvo([...convo, question, "..."])

    fetch(`/api?question=${question}&context=${JSON.stringify(context)}`)
      .then((res) => res.json())
      .then((data) => {
        setConvo([...convo, question, data.response])
        data.context && setContext(data.context)
      });
  }

  return (
    <div className="App">
      <header>
        <h1>Futbot</h1>
        <h2>...or just someone to congratulate you on knowing a language</h2>
        <p>Try saying hi!</p>
        <p>Tell me what a language you can speak?</p>
      </header>
      <div className="body">
        <div className="interface">
          <DialogBox convo={convo} />
          <UserInput action={getfDialogflow}>
            <Button name="Send" />
          </UserInput>
        </div>
      </div>
    </div>
  );
}

export default App;
