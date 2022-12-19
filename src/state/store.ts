import { configureStore } from "@reduxjs/toolkit";
import { apiDataSlice } from "./features/apiData/apiDataSlice";
import { gameSlice } from "./features/game/gameSlice";
import { wordsSlice } from "./features/words/wordsSlice";

export const store = configureStore({
  reducer: {
    words: wordsSlice.reducer,
    game: gameSlice.reducer,
    apiData: apiDataSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
