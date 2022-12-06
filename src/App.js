import "./App.css";
import { Button, DialogBox, UserInput } from "./Compnents.js";

//TODO: send request to api
function getfDialogflow() {
  alert("You need to update this!")
}

// stripped create-react-app to bare bones
function App() {
  return (
    <div>
      <header>
        <h1>Futbot</h1>
        <p>A soccer (or football) bot for the World Cup.</p>
      </header>
      <DialogBox />
      <UserInput />
      <Button name="Send" action={getfDialogflow} />
    </div>
  );
}

export default App;
