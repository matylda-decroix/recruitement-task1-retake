import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { ActiveGame } from "./ActiveGame";
import { FinishedGame } from "./FinishedGame";

export const MappingWords = () => {
  const stillPlaying = useSelector((state: RootState) => {
    return state.game.stillPlaying;
  });
  if (stillPlaying) {
    return <ActiveGame />;
  } else {
    return <FinishedGame />;
  }
};
