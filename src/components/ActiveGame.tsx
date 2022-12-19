import { FormEventHandler } from "react";
import { useSelector } from "react-redux";
import { useGame } from "../contexts/GameContext";
import { RootState } from "../state/store";
import { Word } from "./Word";

export const ActiveGame = () => {
  const { setStillPlaying } = useGame();
  const data = useSelector((state: RootState) => {
    return state.apiData.data;
  });
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setStillPlaying(false);
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
