import { useNavigate } from "react-router-dom";
import { useSetNickname } from "../state/hooks";

export const Start = () => {
  const navigate = useNavigate();
  const setNickname = useSetNickname();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // @ts-ignore
    const nickname = event.target.nickname.value;
    setNickname(nickname);
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
