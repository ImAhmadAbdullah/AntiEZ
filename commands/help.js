/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import { VERSION } from "../variables/main";
import { RED, DARK_AQUA, YELLOW, BLUE, DARK_BLUE, GREEN } from "../variables/colors";
import { discord, command, mod } from "../functions/getComponents";
import {
  COMMAND_DEFAULT,
  COMMAND_TOGGLE,
  COMMAND_RELOAD,
  COMMAND_VERSION,
  COMMAND_CREDITS,
} from "../variables/desc";

const help = () => {
  const pluginAuthor = discord("imahmadabdullah", "994878326319624272", BLUE, "@");
  const messages = [
    new Message(mod("AntiEZ", GREEN), ` ${RED}v${VERSION} ${DARK_AQUA}by `, pluginAuthor),
    ChatLib.getChatBreak(`${DARK_AQUA}-`),
    new Message(command(), COMMAND_DEFAULT),
    new Message(command("toggle"), COMMAND_TOGGLE),
    new Message(command("reload"), COMMAND_RELOAD),
    new Message(command("version"), COMMAND_VERSION),
    new Message(command("credits"), COMMAND_CREDITS),
    ChatLib.getChatBreak(`${DARK_AQUA}-`),
    new Message(`${YELLOW}For any ${RED}queries ${YELLOW}related to `, mod("AntiEZ", GREEN), `${YELLOW}, ${DARK_BLUE}DM `, pluginAuthor, `${DARK_AQUA}.`),
  ];
  messages.forEach(message => {
    ChatLib.chat(message);
  });
};

export default help;
