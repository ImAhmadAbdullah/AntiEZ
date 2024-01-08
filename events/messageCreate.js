/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />
import { config } from "../config/config";
import responses from "../variables/responses";
import { RED, WHITE, RESET } from "../variables/colors";

export default receivedMessage = (event) => {
  const message = ChatLib.getChatMessage(event, true);
  const matchedResponse = responses.find((response) =>
    message.toLowerCase().includes(response.toLowerCase())
  );
  if (matchedResponse && config.toggled) {
    cancel(event);
    const regexPattern = new RegExp(
      `(${matchedResponse.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "i"
    );
    const replacedMessage = message.replace(
      regexPattern,
      `${RED}Easy${WHITE}.${RESET}`
    );
    ChatLib.chat(replacedMessage.replace(/[!?]/g, ""));
  }
};
