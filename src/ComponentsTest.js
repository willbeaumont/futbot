import { Children } from "react";

export function Button(props) {
  return <button type="submit">{props.name}</button>;
}

//TODO: make a component that displays a chat blurb
export function DialogBox(props) {
  const { convo } = props;
  return (
    <div className="chatbox">
      {convo.length > 0 &&
        convo.map((item, id) => (
          <div key={id} className={id % 2 === 0 ? "chat user" : "chat bot"}>
            {item}
          </div>
        ))}
    </div>
  );
}

export function UserInput(props) {
  return (
    <form onSubmit={props.action} className="uiForm">
      <div className="uiInput">
        <label>
          Enter your question:
          <br />
          <input type="text" name="question" />
        </label>
      </div>
      <div className="uiButton">
        {Children.map(props.children, (child) => {
          return child;
        })}
      </div>
    </form>
  );
}
