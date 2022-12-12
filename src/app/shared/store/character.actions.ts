import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Character} from "../model/character.model";

export const characterActions = createActionGroup({
  source: 'Characters',
  events: {
    'Fetch Character List': emptyProps(),
    'Set Character List': props<{ characters: Character[] }>()
  }
});
