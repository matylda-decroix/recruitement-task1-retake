import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (nickname !== "") {
  //       navigate("/game");
  //     }
  //   }, [nickname]);
  const value = {
    nickname,
    setNickname: (nickname: string) => {
      setNickname(nickname);
      navigate("/game");
    },
    result,
    setResult,
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
