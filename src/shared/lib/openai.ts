// import { Configuration, OpenAIApi } from 'openai-edge';

// const config = new Configuration({
//     apiKey: process.env.GPT_API_KEY,
// });
//
// const openAi = new OpenAIApi(config);

export const generateImagePrompt = async (prompt: string) => {
    try {
        console.log(`${process.env.VITE_GPT_API_KEY}`);
        const response = await fetch('https://api.aiguoguo199.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.VITE_GPT_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content:
                            'You are an creative and helpful ai assistant capable of generating interesting thumbnail and descriptions for my notes. Your output will be fed into DALLE API to generate a thumbnail. The description should be minimalistic and flat styled',
                    },
                    {
                        role: 'user',
                        content: `Please generate a thumbnail and description for my note titles ${prompt}`,
                    },
                ],
            }),
        });
        const data = await response.json();
        console.log(data);
        const imageDescription = data.choices[0].message.content;
        return imageDescription as string;
    } catch (e) {
        console.warn(e);
    }
};

export const generateImage = async () => {};
