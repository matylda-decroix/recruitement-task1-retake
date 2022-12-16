import { FormEventHandler } from "react";
import { GameData, useGame } from "../contexts/GameContext";
import { Word } from "./Word";

interface Props {
  data: GameData;
}

export const ActiveGame = ({ data }: Props) => {
  const { setStillPlaying } = useGame();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setStillPlaying(false);
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
      <button type="submit">Check answers</button>
    </form>
  );
};
