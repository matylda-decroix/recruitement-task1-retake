import { GameData, useGame } from "../contexts/GameContext";

interface Props {
  removeWord: (word: string) => void;
  addWord: (word: string) => void;
  checked: boolean;
  word: string;
  data: GameData;
}

export const Word = ({ removeWord, addWord, checked, word, data }: Props) => {
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
          if (checked) {
            removeWord(word);
          } else {
            addWord(word);
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
