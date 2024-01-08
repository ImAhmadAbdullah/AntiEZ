/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />
import { DARK_RED, RED, BOLD, RESET} from "./colors";
let metadata = JSON.parse(FileLib.read("AntiEZ", "./metadata.json") ?? {});

// Metadata
export const NAME = metadata.name;
export const CREATOR = metadata.creator;
export const DESCRIPTION = metadata.description;
export const VERSION = metadata.version;
export const ENTRY = metadata.entry;
export const requires = metadata.requires;

// Extra
export const PREFIX = `${DARK_RED}[${RED}${BOLD}AntiEZ${RESET}${DARK_RED}]`;
export const FAKE_PERIOD = "․";