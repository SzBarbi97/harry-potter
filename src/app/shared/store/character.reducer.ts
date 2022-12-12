import {createReducer, on} from "@ngrx/store";
import {characterActions} from "./character.actions";
import {Character} from "../model/character.model";

const characterArrayInitialState: Character[] = [];

export const characterReducer = createReducer(
  characterArrayInitialState,
  on(characterActions.fetchCharacterList, (state) => state),
  on(characterActions.setCharacterList, (state, {characters}) => characters)
);
