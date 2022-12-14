import { FormEventHandler, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext";
import { getGame } from "../services/game";

interface GameData {
  question: string;
  allwords: string[];
  goodwords: string[];
}

export const Game = () => {
  const navigate = useNavigate();
  const [stillPlaying, setStillPlaying] = useState(true);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [data, setData] = useState<GameData | null>(null);
  const { nickname, setResult } = useGame();
  useEffect(() => {
    getGame().then(setData);
  }, []);
  if (nickname === "") {
    return <Navigate to="/" />;
  }

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

  const MappingWords = () => {
    return (
      <>
        {data.allwords.map((word) => {
          const checked = selectedWords.includes(word);
          let className;
          if (checked) {
            if (stillPlaying) {
              className = "selected";
            } else {
              className = data.goodwords.includes(word)
                ? "correct"
                : "incorrect";
            }
          }
          return (
            <li key={word} className={className}>
              <input
                type="checkbox"
                id={word}
                checked={checked}
                onChange={() => {
                  if (checked) {
                    removeWord(word);
                  } else {
                    addWord(word);
                  }
                }}
              />
              <label htmlFor={word}>
                {word}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>{data.question}</h2>
        <div className="container-cloud">
          <ul>
            <MappingWords />
          </ul>
        </div>
        <button type="submit">
          {stillPlaying ? "Check answers" : "Finish game"}
        </button>
      </form>
    </div>
  );
};
