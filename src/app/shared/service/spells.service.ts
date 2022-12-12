import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Spell} from "../model/spell.model";

@Injectable({
  providedIn: 'root'
})

export class SpellsService {

  constructor(private httpClient: HttpClient) {
  }

  public getSpellList(): Observable<Spell[]> {
    return this.httpClient.get<Spell[]>('https://hp-api.onrender.com/api/spells');
  }
}
