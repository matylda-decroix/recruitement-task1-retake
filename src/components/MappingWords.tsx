import { useSelectStillPlaying } from "../state/hooks";
import { ActiveGame } from "./ActiveGame";
import { FinishedGame } from "./FinishedGame";

export const MappingWords = () => {
  const stillPlaying = useSelectStillPlaying();
  if (stillPlaying) {
    return <ActiveGame />;
  } else {
    return <FinishedGame />;
  }
};
