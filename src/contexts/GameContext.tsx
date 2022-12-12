import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ContextValue {
  nickname: string;
  setNickname: (nickname: string) => void;
  result: number;
  setResult: (nickname: number) => void;
}

const Context = createContext<ContextValue | null>(null);

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [nickname, setNickname] = useState("");
  const [result, setResult] = useState(0);
  const value = { nickname, setNickname, result, setResult };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGame = () => {
  const value = useContext(Context);
  if (value === null) {
    throw new Error("Missing game provider");
  }
  return value;
};
