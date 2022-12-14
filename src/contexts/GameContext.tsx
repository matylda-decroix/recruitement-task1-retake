import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getGame } from "../services/game";

export interface GameData {
  question: string;
  allwords: string[];
  goodwords: string[];
}

interface ContextValue {
  nickname: string;
  setNickname: (nickname: string) => void;
  result: number;
  setResult: (nickname: number) => void;
  stillPlaying: boolean;
  setStillPlaying: (stillPlaying: boolean) => void;
  data: GameData | null;
}

const Context = createContext<ContextValue | null>(null);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [nickname, setNickname] = useState("");
  const [result, setResult] = useState(0);
  const [stillPlaying, setStillPlaying] = useState(true);
  const [data, setData] = useState<GameData | null>(null);
  const navigate = useNavigate();

  const value = {
    nickname,
    setNickname: (nickname: string) => {
      setNickname(nickname);
      getGame().then(setData);
      navigate("/game");
    },
    result,
    setResult,
    stillPlaying,
    setStillPlaying,
    data,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGame = () => {
  const value = useContext(Context);
  if (value === null) {
    throw new Error("Missing game provider");
  }
  return value;
};
