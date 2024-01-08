/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />
import { GREEN, RED, BLUE, AQUA, YELLOW, GOLD, LIGHT_PURPLE } from "../variables/colors";

export const discord = (username, id, color, at) => {
  at = at || "";
  return new TextComponent(`${color}${at}${username}`)
  .setClick("open_url", `https://discord.com/users/${id}`)
  .setHover(
    "show_text",
    `${GOLD}Click this to go to ${color}${at}${username}'s ${LIGHT_PURPLE}Discord${YELLOW}.`
  )
}

export const command = (command) => {
  command = command ? ` ${command}` : "";
  return new TextComponent(`${AQUA}/${GREEN}antiez${GOLD}${command}`)
        .setClick("run_command", `/antiez${command}`)
        .setHover(
          "show_text",
          `${YELLOW}Click this to run ${GOLD}/antiez${command}`
        )
}

export const mod = (module, color) => {
  return new TextComponent(`${color}${module}`)
  .setClick("open_url", `https://www.chattriggers.com/modules/v/${module}`)
  .setHover(
    "show_text",
    `${BLUE}Click this to go to ${color}${module}'s ${RED}ChatTriggers ${BLUE}page${AQUA}.`
  );
}