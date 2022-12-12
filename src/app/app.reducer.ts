import {ActionReducerMap} from "@ngrx/store";
import {Character} from "./shared/model/character.model";
import {characterReducer} from "./shared/store/character.reducer";

export interface AppState {
  characters: Character[]
}

export const appReducer: ActionReducerMap<AppState> = {
  characters: characterReducer
}
