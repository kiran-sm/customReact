import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <p>Nothing updated</p>
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
