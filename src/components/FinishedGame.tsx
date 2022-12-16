import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { GameData, useGame } from "../contexts/GameContext";
import { useWord } from "../contexts/WordContext";
import { Word } from "./Word";

interface Props {
  data: GameData;
}

export const FinishedGame = ({ data }: Props) => {
  const { setResult } = useGame();
  const navigate = useNavigate();
  const store = useWord();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    const numberOfSelected = Object.keys(store.getState()).length;
    const numberOfSelectedCorrect = data.goodwords.filter(
      (word) => store.getState()[word]
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
