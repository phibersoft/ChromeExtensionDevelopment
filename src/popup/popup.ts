// This script is injected into the page when the extension is activated.
// You can use it to interact with the Popup UI.

import { sendMessage } from "@/utils";

console.log(`Popup script loaded.`);

const number = document.getElementById(`number`) as HTMLInputElement;
const result = document.getElementById(`result`) as HTMLSpanElement;

number.addEventListener(`input`, async (ev) => {
  const num = parseInt(number.value);
  if (!isNaN(num)) {
    const calculation = await sendMessage({
      type: `Square`,
      payload: {
        a: num,
      },
    });

    result.innerText = calculation.result.toString();
  }
});
