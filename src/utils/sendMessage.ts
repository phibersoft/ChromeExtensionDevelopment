import { IMessage } from "../types";

export const sendMessage = <ReturnType = any> (message: IMessage) => {
  return new Promise<ReturnType>((resolve, reject) => {
    chrome.runtime.sendMessage(message, (response) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
};
