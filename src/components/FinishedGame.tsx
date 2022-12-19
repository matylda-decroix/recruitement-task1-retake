import { FormEventHandler } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GameData, useGame } from "../contexts/GameContext";
import { RootState } from "../state/store";
import { Word } from "./Word";

interface Props {
  data: GameData;
}

export const FinishedGame = ({ data }: Props) => {
  const { setResult } = useGame();
  const navigate = useNavigate();
  const activeWords = useSelector((state: RootState) => {
    return state.words;
  });
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

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

  const words = data.allwords.map((word) => {
    return <Word key={word} word={word} data={data} />;
  });
  return (
    <form onSubmit={handleSubmit}>
      <h2>{data.question}</h2>
      <div className="container-cloud">
        <ul>{words}</ul>
      </div>
      <button type="submit">Finish game</button>
    </form>
  );
};
