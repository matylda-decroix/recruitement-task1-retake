import { useState } from "react";
import { GameData, useGame } from "../contexts/GameContext";
import { ActiveGame } from "./ActiveGame";
import { FinishedGame } from "./FinishedGame";

interface Props {
  data: GameData;
}

export const MappingWords = ({ data }: Props) => {
  const { stillPlaying } = useGame();

  if (stillPlaying) {
    return <ActiveGame data={data} />;
  } else {
    return <FinishedGame data={data} />;
  }
};
