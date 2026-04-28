// ─── API ──────────────────────────────────────────────────────────────────

async function callAPI(context) {
  // TODO: wire up Anthropic API
  // Placeholder — returns mock data for UI testing
  await new Promise(r => setTimeout(r, 1800));

  return [
    "Hey! I was thinking about that hiking spot you mentioned, have you actually been there yet?",
    "That coffee shop yesterday was lowkey one of the better ones I've been to. You go there often?",
    "Still thinking about that conversation. What's your go to trail when you actually want to switch off?"
  ];
}

export { callAPI };