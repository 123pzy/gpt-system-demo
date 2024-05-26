const OpenAI = require('openai');
require('dotenv').config()

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api.chatanywhere.tech/v1'
});

// 提示用户输入
process.stdout.write("提问: ");

process.stdin.on('data', (buffer) => {
    const question = buffer.toString().trim();
    async function main() {
        const chatCompletion = await client.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: question
                }],
            model: 'gpt-3.5-turbo',
            n: 1
        })
        console.log('回答：', chatCompletion.choices[0].message.content);
        process.stdout.write("\n提问: ");
    }

    main()
})

