import { actionsTypes } from "./actions.types";
import { CharactersData } from "../models/characters.model";
import { createAction } from "@reduxjs/toolkit";
type Keys = keyof typeof actionsTypes;

export type CharactersAction = {
  type: (typeof actionsTypes)[Keys];
  payload: CharactersData[];
};

export const communicateCharactersAction = createAction<CharacterData[]>(
  actionsTypes.communicateAction
);
export const diedCharactersAction = createAction<CharactersData[]>(
  actionsTypes.diedAction
);
export const updateCharactersAction = createAction<CharactersData[]>(
  actionsTypes.updateCharacters
);
export const loadCharactersAction = createAction<CharactersData[]>(
  actionsTypes.loadCharacters
);
