import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {Character} from "../model/character.model";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characterListObservable: Observable<Character[]> | null = null;

  constructor(private httpClient: HttpClient) {
  }

  public getCharacterList(): Observable<Character[]> {
    if (this.characterListObservable) {
      return this.characterListObservable;
    }
    this.characterListObservable = this.httpClient.get<Character[]>('https://hp-api.herokuapp.com/api/characters')
      .pipe(shareReplay());
    return this.characterListObservable;
  }
}
