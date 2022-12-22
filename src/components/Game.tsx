import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getGame } from "../services/game";
import { useSelectData, useSelectNickname, useSetData } from "../state/hooks";
import { MappingWords } from "./MappingWords";

export const Game = () => {
  const nickname = useSelectNickname();
  const data = useSelectData();
  const setData = useSetData();
  const navigate = useNavigate();
  useEffect(() => {
    if (nickname !== "") {
      getGame().then((data) => {
        setData(data);
        navigate("/game");
      });
    }
  }, []);
  if (nickname === "") {
    return <Navigate to="/" />;
  }

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <MappingWords />
    </div>
  );
};
