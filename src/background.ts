// Its a backend file which is used to communicate with the frontend
// It is used to send and receive messages from the frontend
// NOTE: background script is a service-worker like script which runs in the background, its run in a separate thread

import { Message } from "./types";

console.log(`Background script loaded.`);

chrome.runtime.onMessage.addListener((message: Message, sender, sendResponse) => {
  console.log(`Message received from ${sender.tab ? "a content script:" + sender.tab.url : "the extension"}.`);
  console.log(message);

  switch (message.type) {
    case "Plus":
      sendResponse({ result: message.payload.a + message.payload.b });
      break;
    case "Square":
      sendResponse({ result: message.payload.a * message.payload.a });
      break;
    default:
      sendResponse({ result: 0 });
  }
});
