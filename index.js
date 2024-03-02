/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import { config, newPlayer, toggle } from "./config/config";
import messageSend from "./events/messageSend";
import messageCreate from "./events/messageCreate";

let metadata = JSON.parse(FileLib.read("AntiEZ", "./metadata.json") ?? {});
const { name, version, description, requires } = metadata;

const dependencyArray = requires.map((module) =>
  new TextComponent(`&d${module}`)
    .setClick("open_url", `https://www.chattriggers.com/modules/${module}`)
    .setHover("show_text", `&eClick to visit ${module}'s ChatTriggers page.`)
);

const dependencyMessageComponents = [
  new TextComponent("&5Dependencies: "),
  ...dependencyArray.reduce((acc, cur, index) => {
    if (index !== 0) acc.push(new TextComponent(" &5• "));
    acc.push(cur);
    return acc;
  }, []),
];

const contributorsArray = [
  { name: "alexiya", id: "1080661733531729940" },
  { name: "matt․co", id: "110615438873853952" },
  { name: "docilelm", id: "466357595435827200" },
  { name: "blubbie․", id: "653113568090390529" },
];
const contributorComponents = contributorsArray.map((contributor) =>
  new TextComponent(`&e${contributor.name}`)
    .setClick("open_url", `https://discord.com/users/${contributor.id}`)
    .setHover(
      "show_text",
      `&eClick to visit ${contributor.name}'s Discord profile.`
    )
);

const contributorMessageComponents = [
  new TextComponent("&6Contributors: &e"),
  ...contributorComponents.reduce((acc, cur, index) => {
    if (index !== 0) acc.push(new TextComponent(" &6• &e"));
    acc.push(cur);
    return acc;
  }, []),
];

register("worldLoad", newPlayer);
register("messageSent", messageSend);
register("chat", messageCreate).setCriteria(/^.*$/);

register("command", () => {
  const components = [
    new TextComponent(`&a${name} &2[${version}]`)
      .setClick("open_url", `https://www.chattriggers.com/modules/${name}`)
      .setHover(
        "show_text",
        `&eClick to visit the module's ChatTriggers page.`
      ),
    new TextComponent(`&9@imahmadabdullah`)
      .setClick("open_url", `https://discord.com/users/994878326319624272`)
      .setHover("show_text", `&eClick to visit the author's Discord profile.`),
    new TextComponent(`&e&lHERE`).setClick("run_command", "/antieztoggle"),
  ];

  const messages = [
    new Message(components[0], ` &bby `, components[1]),
    new Message(`&3&m${ChatLib.getChatBreak()}`),
    new Message(`&2${description}`),
    new Message(`&3&m${ChatLib.getChatBreak()}`),
    new Message(...dependencyMessageComponents),
    new Message(...contributorMessageComponents),
    new Message(`&3&m${ChatLib.getChatBreak()}`),
    new Message(`&bTo toggle the module, click `, components[2]),
  ];

  messages.forEach((message) => {
    ChatLib.chat(message);
  });
})
  .setName("antiez")
  .setAliases("aez", "antieasy", "aeasy", "ae");

register("command", toggle).setName("antieztoggle");
// register("command", () => ChatLib.command("ct reload", true)).setName("rr");

config.autosave(1);
