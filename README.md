Text Summarizer API

A lightweight and efficient API that summarizes long-form text using AI. Supports various summary modes like brief, relevance-focused, clarity, and conciseness.
```

🔹 *Base URL*
```
https://text-optimizer-api.onrender.com
```

🔹 *Endpoints*
```md
POST /api/summarize

*Request Body (JSON):*
{
  "text": "Your long text here...",
  "mode": "summarize" // Options: summarize | enhance
}

*Response:*
{
  "summary": "Summarized text here..."
}
```

🔹 *Example*
```bash
curl -X POST https://your-api.com/api/summarize \
  -H "Content-Type: application/json" \
  -d '{"text": "Long article here", "mode": "relevance"}'
```

🔹 *Error Handling*
```md
- 400 Bad Request → if `text` is missing or empty
- 500 Internal Server Error → server issues
```

🔹 *Tech Stack*
- Node.js, Express, HuggingFace API