/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />
import { PREFIX } from "../variables/main";
import { mod } from "../functions/getComponents";
import { RED, DARK_RED } from "../variables/colors";
import { reloaded } from "../config/config";

const reload = () => {
  const Reference = Java.type("com.chattriggers.ctjs.Reference")
  const message = new Message(`${PREFIX} `, mod("AntiEZ", DARK_RED), `${RED} is being reloaded.`);
  ChatLib.chat(message);
  reloaded(true);
  Reference.loadCT();

};

export default reload;
