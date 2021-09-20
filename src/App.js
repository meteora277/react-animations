import React, { useState } from "react";

import Animation from "./animation";
import SideBar from "./SideBar";

function App() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState(state + 1);
    console.log(state);
  }

  return (
    <div>
      <Animation key={state} handleClick={handleClick} />
      <SideBar>
        <li>Home</li>
        <li>Friends</li>
        <li>Mentions</li>
        <li>Inbox</li>
        <li>Settings</li>
        <li>Logout</li>
      </SideBar>
    </div>
  );
}

export default App;
