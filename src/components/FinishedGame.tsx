import { FormEventHandler } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGame } from "../contexts/GameContext";
import { RootState } from "../state/store";
import { Word } from "./Word";

export const FinishedGame = () => {
  const { setResult } = useGame();
  const data = useSelector((state: RootState) => {
    return state.apiData.data;
  });
  const navigate = useNavigate();
  const activeWords = useSelector((state: RootState) => {
    return state.words;
  });
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    if (data === null) {
      return;
    }
    const numberOfSelected = Object.keys(activeWords).length;
    const numberOfSelectedCorrect = data.goodwords.filter(
      (word) => activeWords[word]
    ).length;
    const totalCorrect = data.goodwords.length;
    const missedCorrect = totalCorrect - numberOfSelectedCorrect;
    const incorrect = numberOfSelected - numberOfSelectedCorrect;
    const score = numberOfSelectedCorrect * 2 - (missedCorrect + incorrect);
    setResult(score);
    navigate("/results");
  };

  const words = data?.allwords.map((word) => {
    return <Word key={word} word={word} />;
  });
  return (
    <form onSubmit={handleSubmit}>
      <h2>{data?.question}</h2>
      <div className="container-cloud">
        <ul>{words}</ul>
      </div>
      <button type="submit">Finish game</button>
    </form>
  );
};
