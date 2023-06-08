import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "../../redux/reducer";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
