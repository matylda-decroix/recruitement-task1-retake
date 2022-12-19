import { useState } from "react";
import { GameData, useGame } from "../contexts/GameContext";
import { ActiveGame } from "./ActiveGame";
import { FinishedGame } from "./FinishedGame";

export const MappingWords = () => {
  const { stillPlaying } = useGame();

  if (stillPlaying) {
    return <ActiveGame />;
  } else {
    return <FinishedGame />;
  }
};
