/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />
import { config } from "../config/config";
import replaceEZ from "../functions/replaceEZ";

export default sentMessage = (message, event) => {
    if (message.toLowerCase().includes("ez") && config.toggled) {
      cancel(event);
      ChatLib.say(replaceEZ(message));
    }
  };