/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import { config, newPlayer, reloaded } from "./config/config";
import { PREFIX } from "./variables/main";
import { mod } from "./functions/getComponents";
import { DARK_RED, RED } from "./variables/colors";
import messageSend from "./events/messageSend";
import messageCreate from "./events/messageCreate";
import commandHandler from "./handlers/commandHandler";
config.autosave(1);

if (config.reloaded) {
  ChatLib.chat(new Message(`${PREFIX} `, mod("AntiEZ", DARK_RED), `${RED} has been reloaded.`))
  reloaded(false);
}
newPlayer();
register("worldLoad", newPlayer);
register("messageSent", messageSend);
register("chat", messageCreate).setCriteria(/^.*$/);
register("command", commandHandler)
  .setName("antiez")
  .setAliases("aez", "antieasy", "aeasy", "ae");
