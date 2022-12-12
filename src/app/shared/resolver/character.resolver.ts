import {Character} from "../model/character.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable, tap} from "rxjs";
import {characterActions} from "../store/character.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<Character[]> {

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Character[]> {
    return this.store.select('characters')
      .pipe(
        tap(characters => {
          if (!characters || !characters.length) {
            this.store.dispatch(characterActions.fetchCharacterList());
          }
        })
      );
  }

}
