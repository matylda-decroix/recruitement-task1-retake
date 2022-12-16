import { useEffect, useState } from "react";
import { GameData, useGame } from "../contexts/GameContext";
import { useWord } from "../contexts/WordContext";

interface Props {
  word: string;
  data: GameData;
}

export const Word = ({ word, data }: Props) => {
  const { stillPlaying } = useGame();
  const store = useWord();
  const [checked, setChecked] = useState(store.getState()[word] ?? false);
  useEffect(() => {
    store.subscribe(setChecked, word);
  }, []);
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
          if (stillPlaying) {
            store.toggleWord(word);
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
