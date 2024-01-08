/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import { PREFIX } from "../variables/main";
import { AQUA, GREEN, RED } from "../variables/colors";
import { toggle, config } from "../config/config";

const toggleCommand = () => {
  toggle();
  const moduleStatus = config.toggled ? GREEN : RED;
  const onOffStatus = config.toggled ? "on" : "off";
  const message = `${PREFIX} ${AQUA}You have turned the module ${moduleStatus}${onOffStatus}.`;
  ChatLib.chat(message);
};

export default toggleCommand;
