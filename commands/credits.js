/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import { PREFIX, FAKE_PERIOD } from "../variables/main";
import {
  AQUA,
  DARK_AQUA,
  GREEN,
  DARK_GREEN,
  RED,
  DARK_RED,
} from "../variables/colors";
import { discord, mod } from "../functions/getComponents";

const credits = () => {
  const messages = [
    `${PREFIX} ${AQUA}Credit goes to me, `,
    discord("imahmadabdullah", "994878326319624272", DARK_AQUA),
    `${AQUA}, ${DARK_AQUA}the mod creator${AQUA}. ${GREEN}Additional credit is given to individuals `,
    discord("alexiaya", "1080661733531729940", DARK_GREEN),
    `${GREEN}, `,
    discord(`matt${FAKE_PERIOD}co`, "110615438873853952", DARK_GREEN),
    `${GREEN}, `,
    discord("docilelm", "466357595435827200", DARK_GREEN),
    `${GREEN}, and `,
    discord("blubbie.", "653113568090390529", DARK_GREEN),
    ` ${GREEN}for their assistance with various parts of the code. ${RED}Special thanks to `,
    discord("sirhypernova", "225738946661974017", DARK_RED),
    `${RED} for creating `,
    mod("PogData", DARK_RED),
    `${RED} and `,
    discord("maxssho13", "399012872941862914", DARK_RED),
    `${RED} for creating `,
    mod("CTAutocomplete", DARK_RED),
    `${RED} which are some modules I used.`,
  ];
  ChatLib.chat(new Message(...messages));
};

export default credits;
