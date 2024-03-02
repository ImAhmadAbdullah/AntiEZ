/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import PogObject from "../../PogData";

export const config = new PogObject(
  "AntiEZ",
  { toggled: true, newPlayer: true },
  "./config/config.json"
);

export const toggle = () => {
  config.toggled = !config.toggled;
  const moduleStatus = config.toggled ? "&a" : "&c";
  const onOffStatus = config.toggled ? "on" : "off";
  const message = `&6You have turned the module ${moduleStatus}${onOffStatus}&6.`;
  ChatLib.chat(message);
  config.save();
};

export const newPlayer = () => {
  if (config.newPlayer) {
    ChatLib.command("ae", true);
    config.newPlayer = !config.newPlayer;
    config.save();
  }
};