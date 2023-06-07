import { createReducer } from "@reduxjs/toolkit";
import * as ac from "./actions.creator";

export type CharactersState = {
  characters: CharacterData[];
};

const initialState: CharactersState = {
  characters: [],
};

export const charactersReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.communicateCharactersAction, (state, { payload }) => ({
    ...state,
    payload,
  }));

  builder.addCase(ac.diedCharactersAction, (state, { payload }) => ({
    ...state,
    payload,
  }));

  builder.addCase(ac.updateCharactersAction, (state, { payload }) => ({
    ...state,
    payload,
  }));

  builder.addCase(ac.loadCharactersAction, (state, { payload }) => ({
    ...state,
    payload,
  }));
});
