import { useDispatch, useSelector } from "react-redux";
import { apiDataSlice, GameData } from "./features/apiData/apiDataSlice";
import { gameSlice } from "./features/game/gameSlice";
import { wordsSlice } from "./features/words/wordsSlice";
import { RootState } from "./store";

export const useSelectNickname = () =>
  useSelector((state: RootState) => {
    return state.game.nickname;
  });

export const useSelectResult = () =>
  useSelector((state: RootState) => {
    const activeWords = state.words;
    const data = state.apiData.data;
    if (data === null) return;
    const numberOfSelected = Object.keys(activeWords).length;
    const numberOfSelectedCorrect = data.goodwords.filter(
      (word) => activeWords[word]
    ).length;
    const totalCorrect = data.goodwords.length;
    const missedCorrect = totalCorrect - numberOfSelectedCorrect;
    const incorrect = numberOfSelected - numberOfSelectedCorrect;
    const score = numberOfSelectedCorrect * 2 - (missedCorrect + incorrect);
    return { score, incorrect, missedCorrect, totalCorrect };
  });

export const useSelectData = () =>
  useSelector((state: RootState) => {
    return state.apiData.data;
  });

export const useSelectStillPlaying = () =>
  useSelector((state: RootState) => {
    return state.game.stillPlaying;
  });

export const useSelectChecked = (word: string) =>
  useSelector((state: RootState) => {
    return state.words[word] ?? false;
  });

export const useSetNickname = () => {
  const dispatch = useDispatch();
  return (nickname: string) =>
    dispatch(gameSlice.actions.setNickname(nickname));
};

export const useFinishGame = () => {
  const dispatch = useDispatch();
  return () => dispatch(gameSlice.actions.finishGame());
};

export const useSetData = () => {
  const dispatch = useDispatch();
  return (data: GameData) => dispatch(apiDataSlice.actions.setData(data));
};

export const useToggleWord = () => {
  const dispatch = useDispatch();
  return (word: string) => dispatch(wordsSlice.actions.toggleWord(word));
};
