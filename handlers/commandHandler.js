/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />
import version from "../commands/version";
import toggle from "../commands/toggle";
import reload from "../commands/reload";
import help from "../commands/help";
import credits from "../commands/credits";
// import randomString from "../functions/randomString";

export default processCommands = (...args) => {
  if (args[0] !== undefined) {
    const command = args[0].toLowerCase();
    switch (command) {
      case "toggle":
      case "t":
        toggle();
        break;
      case "version":
      case "v":
        version();
        break;
      case "reload":
      case "r":
        reload();
        break;
      case "credits":
      case "c":
        credits();
        break;
      /**
      case "test":
      case "t":
        ChatLib.say(`ez ${randomString(10)}`);
        break;
      */
      default:
        help();
        break;
    }
  } else help();
};
