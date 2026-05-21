import OpenAI from "openai";

// console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey:
    process.env.OPENAI_API_KEY
});

export const askAI = async (
  message
) => {
  const completion =
    await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "system",
          content:
            "You are a Japanese tutor."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

  return completion.choices[0]
    .message.content;
};