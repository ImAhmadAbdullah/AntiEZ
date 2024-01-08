/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import { PREFIX, VERSION } from "../variables/main";
import { RED, BOLD, GREEN, BLUE } from "../variables/colors";

const version = () => {
  const message = `${PREFIX} ${RED}Currently running ${BOLD}${GREEN}AntiEZ ${BLUE}v${VERSION}`;
  ChatLib.chat(message);
};

export default version;
