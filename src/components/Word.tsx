import { useDispatch } from "react-redux";
import { wordsSlice } from "../state/features/words/wordsSlice";
import {
  useSelectChecked,
  useSelectData,
  useSelectStillPlaying,
} from "../state/hooks";

interface Props {
  word: string;
}

export const Word = ({ word }: Props) => {
  const stillPlaying = useSelectStillPlaying();
  const data = useSelectData();
  const checked = useSelectChecked(word);
  const dispatch = useDispatch();
  let className;
  if (checked) {
    if (stillPlaying) {
      className = "selected";
    } else {
      className = data?.goodwords.includes(word) ? "correct" : "incorrect";
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
