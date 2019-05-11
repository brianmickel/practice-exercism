export default class Words {
  count(phrase: string): Map<string, number> {
    const wordCounts = new Map();
    const allWords = phrase
      .trim()
      .toLowerCase()
      .split(/\s+/);
    for (let w of allWords) {
      wordCounts.set(w, (wordCounts.get(w) || 0) + 1);
    }

    return wordCounts;
  }
}
