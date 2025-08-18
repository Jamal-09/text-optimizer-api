const HF_TOKEN = process.env.HF_TOKEN;
const asyncHandler = require('express-async-handler');
const API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
const axios = require('axios');

const summarizeText = asyncHandler(async (req, res) => {
    const { text, mode } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }
    let prompt;

    switch (mode) {
        case 'enhance':
            prompt = `Enhance the following text for clarity and remove irrelevant or redundant information: ${text}`;
            break;
        // Uncomment the following cases if you want to support different modes
        // case 'length':
        //     prompt = `Summarize the following text to a length of 10 words: ${text}`;
        //     break;
        // case 'relevance':
        //     prompt = `Rate this text on a scale of 1 to 10: ${text}`;
        //     break;
        // case 'conciseness':
        //     prompt = `Make the following text more concise: ${text}`;
        //     break;
        // case 'clarity':
        //     prompt = `Improve the clarity of the following text: ${text}`;
        //     break;
        // case 'brief':
        //     prompt = `Summarize the following text in a brief manner: ${text}`;
        //     break;
        // case 'topic':
        //     prompt = `Identify the main topic of the following text: ${text}`;
        //     break;
        default:
            prompt = `Summarize the following text: ${text}`;
            break;
    }

    try {
        const response = await axios.post(API_URL, {
            inputs: prompt,
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${HF_TOKEN}`,
            },
        });
        const summary = response.data[0].summary_text;
        res.json({ mode, summary });
    } catch (error) {
        res.status(500).json({ error: 'Failed to summarize text' });
    }
});

module.exports = { summarizeText };