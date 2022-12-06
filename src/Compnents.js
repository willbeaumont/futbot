//TODO: create a button component
export function Button(props) {
  return <button onClick={props.action}>{props.name}</button>;
}

//TODO: make a component that displays a chat blurb
export function DialogBox() {
  return <div>Component to display chat conversation...</div>;
}

//TODO: handle user input
export function UserInput() {
  return (
    <div>
      <textarea></textarea>
    </div>
  );
}
