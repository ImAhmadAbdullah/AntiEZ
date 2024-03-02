/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import { config } from "../config/config";

export default sentMessage = (message, event) => {
  if (/\bez\b/i.test(message) && config.toggled) {
    cancel(event);
    const newMessage = message
    .replace(/Ez/g, "Easy")
    .replace(/EZ/g, "EASY")
    .replace(/ez/g, "easy")
    .replace(/eZ/g, "easy");
    ChatLib.say(newMessage);
  }
};
