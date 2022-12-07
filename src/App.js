import "./App.css";
import { Button, DialogBox, UserInput } from "./Components.js";

/* Here is a sample of what is returned by the Dialogflow API
{
  "id": "bc9c9f2f-b707-4bdd-aa1e-b5f053a8f8b3",
  "timestamp": "2022-12-06T09:45:19.128Z",
  "lang": "en",
  "result": {
    "source": "agent",
    "resolvedQuery": "What is the weather like?",
    "action": "",
    "actionIncomplete": false,
    "parameters": {},
    "contexts": [],
    "metadata": {
      "intentId": "b5691684-a3e0-4d3e-befc-5f5b5d5b5d5d",
      "webhookUsed": "false",
      "webhookForSlotFillingUsed": "false",
      "intentName": "Get Weather"
    },
    "fulfillment": {
      "speech": "The weather is currently sunny and warm.",
      "messages": [
        {
          "type": 0,
          "speech": "The weather is currently sunny and warm."
        }
      ]
    },
    "score": 1
  },
  "status": {
    "code": 200,
    "errorType": "success"
  },
  "sessionId": "a1b2c3d4-e5f6-g7h8-i9j0"
}
*/

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
