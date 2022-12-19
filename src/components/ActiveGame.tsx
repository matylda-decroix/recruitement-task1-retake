import { FormEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameSlice } from "../state/features/game/gameSlice";
import { RootState } from "../state/store";
import { Word } from "./Word";

export const ActiveGame = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state.apiData.data;
  });
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
