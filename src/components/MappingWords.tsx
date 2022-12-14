import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext";
import { Word } from "./Word";

export const MappingWords = () => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const { stillPlaying, data, setStillPlaying, setResult } = useGame();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (stillPlaying) {
      setStillPlaying(false);
      return;
    }
    if (data === null) {
      return;
    }

    const numberOfSelected = selectedWords.length;
    const numberOfSelectedCorrect = data.goodwords.filter((word) =>
      selectedWords.includes(word)
    ).length;
    const totalCorrect = data.goodwords.length;
    const missedCorrect = totalCorrect - numberOfSelectedCorrect;
    const incorrect = numberOfSelected - numberOfSelectedCorrect;
    const score = numberOfSelectedCorrect * 2 - (missedCorrect + incorrect);
    setResult(score);
    navigate("/results");
  };

  const removeWord = (word: string) => {
    setSelectedWords((oldWords) => {
      return oldWords.filter((oldWord) => {
        return oldWord !== word;
      });
    });
  };

  const addWord = (word: string) => {
    setSelectedWords((oldWords) => [...oldWords, word]);
  };

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{data.question}</h2>
      <div className="container-cloud">
        <ul>
          {data.allwords.map((word) => {
            const checked = selectedWords.includes(word);

            return (
              <Word
                key={word}
                removeWord={removeWord}
                addWord={addWord}
                checked={checked}
                word={word}
                data={data}
              />
            );
          })}
        </ul>
      </div>
      <button type="submit">
        {stillPlaying ? "Check answers" : "Finish game"}
      </button>
    </form>
  );
};
