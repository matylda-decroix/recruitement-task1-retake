import { FormEventHandler } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../state/store";
import { Word } from "./Word";

export const FinishedGame = () => {
  const data = useSelector((state: RootState) => {
    return state.apiData.data;
  });
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
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
