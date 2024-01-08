/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import PogObject from "../../PogData";
import {
  GOLD,
  YELLOW,
  RED,
  BLUE,
  GREEN,
  AQUA,
  DARK_AQUA,
  DARK_PURPLE,
} from "../variables/colors";
import { NAME, VERSION, PREFIX } from "../variables/main";

export const config = new PogObject(
  NAME,
  { toggled: true, reloaded: false, newPlayer: true },
  "./config/config.json"
);

export const toggle = () => {
  config.toggled = !config.toggled;
  config.save();
};

export const newPlayer = () => {
  if (config.newPlayer) {
    const message1 = `${PREFIX} ${YELLOW}Hello, and welcome! As a ${GOLD}new user${YELLOW}, we're ${GOLD}excited ${YELLOW}to have ${GOLD}you ${YELLOW}here. To kick things off, type ${RED}/antiez ${YELLOW}to get started with the mod's features.`;
    const message2 = new Message(
      `${PREFIX} `,
      new TextComponent(`${GREEN}AntiEZ ${DARK_AQUA}(v${VERSION})`)
        .setClick("open_url", "https://www.chattriggers.com/modules/v/AntiEZ")
        .setHover(
          "show_text",
          `${BLUE}Click this to go to ${GREEN}AntiEZ's ${RED}CTModule ${BLUE}website${AQUA}.`
        ),
      `${YELLOW} is designed to ${GOLD}enhance ${YELLOW}your chatting experience. For instance, when you say "${RED}ez${YELLOW}", it ${GOLD}autocorrects${YELLOW} to "${GREEN}easy${YELLOW}", and if someone else says "${RED}ez${YELLOW}" and ${DARK_PURPLE}Hypixel${YELLOW} changes it, you'll see "${GREEN}easy${YELLOW}" from them in your chat!`
    );
    ChatLib.chat(message1);
    ChatLib.chat(message2);
    config.newPlayer = !config.newPlayer;
    config.save();
  }
};

export const reloaded = (boolean) => {
  config.reloaded = boolean;
  config.save();
}