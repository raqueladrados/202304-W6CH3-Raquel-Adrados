import { actionsTypes } from "./actions.types";
import { CharactersData } from "../models/characters.model";
type Keys = keyof typeof actionsTypes;

export type CharactersAction = {
  type: (typeof actionsTypes)[Keys];
  payload: CharactersData[];
};
