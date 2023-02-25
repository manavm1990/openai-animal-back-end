import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const MODEL = "text-davinci-003";
const TEMPERATURE = 0.6;

dotenv.config();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export default function getCompletion(prompt) {
  return openai
    .createCompletion({ model: MODEL, prompt, temperature: TEMPERATURE })
    .then((completion) => {
      return completion.data.choices[0].text;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
