import { FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { gameSlice } from "../state/features/game/gameSlice";
import { useSelectData } from "../state/hooks";
import { Word } from "./Word";

export const ActiveGame = () => {
  const dispatch = useDispatch();
  const data = useSelectData();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(gameSlice.actions.finishGame());
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
