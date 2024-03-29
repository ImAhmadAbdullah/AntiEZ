/// <reference types="../../CTAutocomplete" />
/// <reference lib="es2015" />

import { config } from "../config/config";

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
    const replacedMessage = message.replace(regexPattern, `&cEasy&f.`);
    ChatLib.chat(replacedMessage.replace(/[!?]/g, ""));
  }
};

// (Updated: 03-March-2024)
const responses = [
  "Wait... This isn't what I typed!",
  "I like long walks on the beach and playing Hypixel",
  "You're a great person! Do you want to play some Hypixel games with me?",
  "In my free time I like to watch cat videos on Youtube",
  "I sometimes try to say bad things and then this happens :(",
  "Pls give me doggo memes!",
  "What happens if I add chocolate milk to macaroni and cheese?",
  "Can you paint with all the colors of the wind",
  "I had something to say, then I forgot it.",
  "When nothing is going right, go left.",
  "Doin a bamboozle fren.",
  "I like Minecraft pvp but you are truly better than me!",
  "Why can't the Ender Dragon read a book? Because she always starts at the End.",
  "Let's be friends instead of fighting okay?",
  "I heard you like minecraft, so I built a computer so you can minecraft, while minecrafting in your minecraft.",
  "I like pineapple on my pizza",
  "Sometimes I sing soppy, love songs in the car.",
  "Sometimes I sing soppy love songs in the car.",
  "Please go easy on me, this is my first game!",
  "Maybe we can have a rematch?",
  "Behold, the great and powerful, my magnificent and almighty nemesis!",
  "I need help, teach me how to play!",
  "Your personality shines brighter than the sun.",
  "I enjoy long walks on the beach and playing Hypixel",
  "Anybody else really like Rick Astley?",
  "If the world in Minecraft is infinite....how can the sun revolve around it?",
  "I like to eat pasta, do you prefer nachos?",
  "ILY<3",
  "Pineapple doesn't go on pizza!",
  "When I saw the guy with a potion I knew there was trouble brewing.",
  "Blue is greener than purple for sure",
  "Hello everyone! I'm an innocent player who loves everything Hypixel.",
  "I have really enjoyed playing with you! <3",
  "You are very good at this game friend.",
  "I like to eat pasta, do you prefer nachos?",
  "Your Clicks per second are godly. :o",
  "Hey Helper, how play game?",
  "Welcome to the hypixel zoo!",
  "With great power... comes a great electricity bill!",
];
