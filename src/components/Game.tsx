import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { getGame } from "../services/game";
import { apiDataSlice } from "../state/features/apiData/apiDataSlice";
import { RootState } from "../state/store";
import { MappingWords } from "./MappingWords";

export const Game = () => {
  const nickname = useSelector((state: RootState) => {
    return state.game.nickname;
  });
  const data = useSelector((state: RootState) => {
    return state.apiData.data;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (nickname !== "") {
      getGame().then((data) => {
        dispatch(apiDataSlice.actions.setData(data));
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
