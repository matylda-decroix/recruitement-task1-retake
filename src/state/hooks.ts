import { useSelector } from "react-redux";
import { RootState } from "./store";

export const useNickname = () =>
  useSelector((state: RootState) => {
    return state.game.nickname;
  });

export const useResult = () =>
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
    return score;
  });

export const useData = () =>
  useSelector((state: RootState) => {
    return state.apiData.data;
  });

export const useStillPlaying = () =>
  useSelector((state: RootState) => {
    return state.game.stillPlaying;
  });

export const useChecked = (word: string) =>
  useSelector((state: RootState) => {
    return state.words[word] ?? false;
  });