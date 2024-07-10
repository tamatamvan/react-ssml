/**
 * Implement the CurrentlyReading component here
 * This component should have the following,
 * - A container tag with text containing all sentences supplied
 * - A p tag containing the current sentence with testID "current-sentence"
 * - A span tag inside the p tag containing the current word with testID "current-word"
 *
 * See example.gif for an example of how the component should look like, feel free to style it however you want as long as the testID exists
 */
export const CurrentlyReading = ({
  currentWordRange,
  currentSentenceIdx,
  sentences,
}: {
  currentWordRange: [number, number];
  currentSentenceIdx: number;
  sentences: string[];
}) => {
  const currentWord = sentences[currentSentenceIdx]
    ?.slice(...currentWordRange)
    .trim();

  return (
    <div className="currently-reading">
      <h1 className="currently-reading-text">
        {sentences[currentSentenceIdx]?.split(' ').map((word) => (
          <span className={currentWord === word ? 'current-word' : ''}>
            {word}{' '}
          </span>
        ))}
      </h1>
      {sentences.map((sentence, idx) => (
        <p
          key={`sentence-${idx}`}
          data-testid={currentSentenceIdx === idx ? 'current-sentence' : ''}
        >
          {sentence.split(' ').map((word) => (
            <span>{word} </span>
          ))}
        </p>
      ))}
    </div>
  );
};
