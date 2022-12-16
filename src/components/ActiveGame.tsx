import { FormEventHandler } from "react";
import { GameData, useGame } from "../contexts/GameContext";
import { Word } from "./Word";

interface Props {
  data: GameData;
  selectedWords: string[];
  toggleWord: (word: string, sBs: boolean) => void;
}

export const ActiveGame = ({ data, selectedWords, toggleWord }: Props) => {
  const { setStillPlaying } = useGame();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setStillPlaying(false);
  };

  const words = data.allwords.map((word) => {
    const checked = selectedWords.includes(word);
    return (
      <Word
        key={word}
        toggleWord={toggleWord}
        checked={checked}
        word={word}
        data={data}
      />
    );
  });
  return (
    <form onSubmit={handleSubmit}>
      <h2>{data.question}</h2>
      <div className="container-cloud">
        <ul>{words}</ul>
      </div>
      <button type="submit">Check answers</button>
    </form>
  );
};
