/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

export default replaceEZ = (message) =>
message
  .replace(/Ez/g, "Easy")
  .replace(/EZ/g, "EASY")
  .replace(/ez/g, "easy")
  .replace(/eZ/g, "easy");