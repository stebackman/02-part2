import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
/*
import axios from "axios"; /*

/*const promise = axios.get("http://localhost:3001/notes");
console.log(promise);
*/
/*
const promise2 = axios.get("http://localhost:3001/foobar");
console.log(promise2);
*/
/*
const promise = axios.get("http://localhost:3001/notes");

promise.then((response) => {
  console.log(response);
});
*/ /*
ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);
axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  console.log(notes);
});
*/
/*
axios.get("http://localhost:3001/notes").then((response) => {
  const notes = response.data;
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App notes={notes} />
  );
});*/
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
