import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gameSlice } from "../state/features/game/gameSlice";

export const Start = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // @ts-ignore
    const nickname = event.target.nickname.value;
    dispatch(gameSlice.actions.setNickname(nickname));
    navigate("/game");
  };

  return (
    <div>
      <h2>Worldcloud game</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="nickname"
          type="text"
          placeholder="Enter your nickname here"
        />
        <button type="submit">play</button>
      </form>
    </div>
  );
};
