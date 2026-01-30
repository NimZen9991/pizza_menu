import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello yeaaaa okay React!</h1>;
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
); // strict mode will check if there is some outdate libraries we are using

// React before 18 was a bit diffrent .
