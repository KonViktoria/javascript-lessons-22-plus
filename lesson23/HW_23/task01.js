import { GoogleGenAI } from "@google/genai";

async function askAi(prompt) {
  const genAi = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
  });

  const response = await genAi.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  return response.text;
}

async function main() {
  const prompt =
    "Напиши что такое REST API и как его использовать в JavaScript";

  const aiResponse = await askAi(prompt);

  console.log("AI Response:", aiResponse);

const lines = aiResponse.split("\n");
const codes = ["200", "201", "400", "404", "500"];
const codeLines = lines.filter(function(line) {
     return codes.some(function(code) {
        return line.includes(code);
    });
});
console.log(codeLines);
}
main();

const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

methods.forEach(function(method) {
    const count = aiResponse.split(method).length - 1;
    console.log(method, count);
});