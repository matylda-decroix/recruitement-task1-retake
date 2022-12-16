import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { GameData, useGame } from "../contexts/GameContext";
import { Word } from "./Word";

interface Props {
  data: GameData;
  selectedWords: string[];
}

export const FinishedGame = ({ data, selectedWords }: Props) => {
  const { setResult } = useGame();
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

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

  const words = data.allwords.map((word) => {
    const checked = selectedWords.includes(word);
    return <Word key={word} checked={checked} word={word} data={data} />;
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
