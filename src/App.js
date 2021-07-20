// import './App.css';
import React, { useState } from "react";

// the below function is called when we have a heavy computational task, and we want to only called the func only once
// when component renders for the 1st time
function expInState () {
  return 10
}

const App = () => {
  useState(() => expInState())

  return (
    <div>Hey {expInState}</div>
  );
}

export default App;
