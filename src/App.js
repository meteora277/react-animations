import React, { useState } from "react";

import Animation from "./animation";
import ExamplePage from "./ExamplePage";
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
      <div>
        <SideBar>
          <li>Home</li>
          <li>Friends</li>
          <li>Mentions</li>
          <li>Inbox</li>
          <li>Settings</li>
          <li>Logout</li>
        </SideBar>
      </div>
      <ExamplePage />
    </div>
  );
}

export default App;
