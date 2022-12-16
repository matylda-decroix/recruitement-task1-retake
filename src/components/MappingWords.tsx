import { useState } from "react";
import { GameData, useGame } from "../contexts/GameContext";
import { ActiveGame } from "./ActiveGame";
import { FinishedGame } from "./FinishedGame";

interface Props {
  data: GameData;
}

export const MappingWords = ({ data }: Props) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const { stillPlaying } = useGame();

  const removeWord = (word: string) => {
    setSelectedWords((oldWords) => {
      return oldWords.filter((oldWord) => {
        return oldWord !== word;
      });
    });
  };

  const addWord = (word: string) => {
    setSelectedWords((oldWords) => [...oldWords, word]);
  };
  const toggleWord = (word: string, shouldBeSelected: boolean) => {
    if (!shouldBeSelected) {
      removeWord(word);
    } else {
      addWord(word);
    }
  };

  if (stillPlaying) {
    return (
      <ActiveGame
        data={data}
        selectedWords={selectedWords}
        toggleWord={toggleWord}
      />
    );
  } else {
    return <FinishedGame data={data} selectedWords={selectedWords} />;
  }
};
