import { useEffect, useState } from 'react';
import './App.css';

import { Controls } from './components/Controls';
import { CurrentlyReading } from './components/CurrentlyReading';
import { fetchContent, parseContentIntoSentences } from './lib/content';

function App() {
  const [sentences, setSentences] = useState<Array<string>>([]);
  // const { currentWord, currentSentence, controls } = useSpeech(sentences);

  const fetchData = async () => {
    const content = await fetchContent();
    setSentences(parseContentIntoSentences(content));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Text to speech</h1>
      <div>
        <CurrentlyReading sentences={sentences} />
      </div>
      <div>
        <Controls />
      </div>
    </div>
  );
}

export default App;
