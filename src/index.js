import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import Header from "./components/header";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// Explain JSX
// const App = () => {
//   return React.createElement('h1', {className: "test"}, 'Hello there...', React.createElement('div', {},'djfdslfs'));
// };
