import { useEffect, useState } from 'react';
import './App.css';

import { Controls } from './components/Controls';
import { CurrentlyReading } from './components/CurrentlyReading';
import { fetchContent, parseContentIntoSentences } from './lib/content';
import { useSpeech } from './lib/useSpeech';

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  const { currentWordRange, currentSentenceIdx, play, pause, playbackState } =
    useSpeech(sentences);

  const fetchData = async () => {
    const content = await fetchContent();
    setSentences(parseContentIntoSentences(content));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>{sentences[currentSentenceIdx]}</h1>
      <div>
        <CurrentlyReading
          currentSentenceIdx={currentSentenceIdx}
          currentWordRange={currentWordRange}
          sentences={sentences}
        />
      </div>
      <div>
        <Controls
          play={play}
          pause={pause}
          loadNewContent={fetchData}
          state={playbackState}
        />
      </div>
    </div>
  );
}

export default App;
