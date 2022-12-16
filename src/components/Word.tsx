import { GameData, useGame } from "../contexts/GameContext";

interface Props {
  toggleWord?: (word: string, sBs: boolean) => void;
  checked: boolean;
  word: string;
  data: GameData;
}

export const Word = ({ toggleWord, checked, word, data }: Props) => {
  const { stillPlaying } = useGame();
  let className;
  if (checked) {
    if (stillPlaying) {
      className = "selected";
    } else {
      className = data.goodwords.includes(word) ? "correct" : "incorrect";
    }
  }
  return (
    <li className={className}>
      <input
        type="checkbox"
        id={word}
        checked={checked}
        onChange={() => {
          if (toggleWord) {
            toggleWord(word, !checked);
          }
        }}
      />
      <label htmlFor={word}>
        {word}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </label>
    </li>
  );
};
