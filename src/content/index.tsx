import React from "react";
import { createRoot } from "react-dom/client";
import ContentScript from "./contentScript";



function init(message: String) {
  const container = document.createElement("div");
  if (!container) {
    throw new Error("no container");
  }
  const remove = () => {
    root.unmount();
  }
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<ContentScript text={message} onToggle={remove}/>);
  //root.unmount();

  
}




chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) 
  {
    console.log(1);
    init(request.greeting);
  }
);