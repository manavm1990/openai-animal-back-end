import data from "./training-data.js";

export default {
  generateAnimalPrompt(userInput) {
    return `${data.animal}
    Animal: ${userInput}
    Names:
    `;
  },
};
