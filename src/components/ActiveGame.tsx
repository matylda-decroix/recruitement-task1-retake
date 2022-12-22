import { FormEventHandler } from "react";
import { useFinishGame, useSelectData } from "../state/hooks";
import { Word } from "./Word";

export const ActiveGame = () => {
  const finishGame = useFinishGame();
  const data = useSelectData();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    finishGame();
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
      <button type="submit">Check answers</button>
    </form>
  );
};
