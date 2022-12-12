import { useGame } from "../contexts/GameContext";

export const Start = () => {
  const { setNickname } = useGame();

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    // @ts-ignore
    const nickname = event.target.nickname.value;
    setNickname(nickname);
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
