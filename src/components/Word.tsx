import { useDispatch, useSelector } from "react-redux";
import { GameData, useGame } from "../contexts/GameContext";
import { wordsSlice } from "../state/features/words/wordsSlice";
import { RootState } from "../state/store";

interface Props {
  word: string;
  data: GameData;
}

export const Word = ({ word, data }: Props) => {
  const { stillPlaying } = useGame();
  const checked = useSelector((state: RootState) => {
    return state.words[word] ?? false;
  });
  const dispatch = useDispatch();
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
            const action = wordsSlice.actions.toggleWord(word);
            dispatch(action);
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
