const API_URL = 'http://localhost:5174/content';

/**
 * Fetch the content from the api
 * In case of an error, return content as "<speak><s>There was an error</s></speak>"
 */
const fetchContent = async (url = API_URL): Promise<string> => {
  try {
    const contentResponse = await fetch(`${API_URL}`);
    const contentJson = (await contentResponse.json()) as { content: string };
    return contentJson.content;
  } catch (err) {
    return '<speak><s>There was an error</s></speak>';
  }
};

/**
 * Parse the content into sentences, and return an array of sentences. Look at the Readme for sample input and expected output.
 * Avoid using DOMParser for implementing this function.
 */

const isValidContent = (content: string) => {
  return content.startsWith('<speak>') && content.endsWith('</speak>');
};

const trimSpeakTag = (content: string) => {
  return content.replace('<speak>', '').replace('</speak>', '');
};

const splitSentences = (trimedContent: string) => {
  return trimedContent
    .split('<s>')
    .filter((str) => !!str)
    .map((str) => str.substring(0, str.indexOf('</s>')));
};

const parseContentIntoSentences = (content: string): Array<string> => {
  if (isValidContent(content)) {
    return splitSentences(trimSpeakTag(content));
  }
  return [];
};

export { fetchContent, parseContentIntoSentences };
