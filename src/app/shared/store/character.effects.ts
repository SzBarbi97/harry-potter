import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {characterActions} from "./character.actions";
import {map, switchMap} from "rxjs";
import {CharactersService} from "../service/characters.service";

@Injectable()
export class CharacterEffects {

  fetchCharacterList = createEffect(() => {
    return this.actions.pipe(
      ofType(characterActions.fetchCharacterList),
      switchMap(() => this.characterService.getCharacterList()),
      map(characters => {
        let id = 1;
        characters.forEach(character => character.id = id++);
        return characterActions.setCharacterList({characters: characters});
      }))
  });

  constructor(
    private actions: Actions,
    private characterService: CharactersService,
  ) {
  }

}
