import { createContext, PropsWithChildren, useContext } from "react";

type ContextValue = ReturnType<typeof makeStore>;

const Context = createContext<ContextValue | null>(null);

type Callback = (isSelected: boolean) => void;

const makeStore = () => {
  const state: Record<string, boolean> = {};
  let subscriptions: {
    word: string;
    callback: Callback;
  }[] = [];
  return {
    subscribe: (callback: Callback, word: string) => {
      subscriptions.push({ word, callback });
    },
    toggleWord: (word: string) => {
      if (state[word] === true) {
        delete state[word];
        subscriptions
          .filter((subscription) => subscription.word === word)
          .forEach((subscription) => {
            subscription.callback(false);
          });
      } else {
        state[word] = true;
        subscriptions
          .filter((subscription) => subscription.word === word)
          .forEach((subscription) => {
            subscription.callback(true);
          });
      }
    },
    getState: () => state,
  };
};

export const WordProvider = ({ children }: PropsWithChildren) => {
  const value = makeStore();
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useWord = () => {
  const value = useContext(Context);
  if (value === null) {
    throw new Error("Missing word provider");
  }
  return value;
};
