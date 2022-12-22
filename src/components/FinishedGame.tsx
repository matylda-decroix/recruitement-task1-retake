import { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { useSelectData } from "../state/hooks";
import { Word } from "./Word";

export const FinishedGame = () => {
  const data = useSelectData();
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
