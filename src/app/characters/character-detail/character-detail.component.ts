import {Component, OnInit} from '@angular/core';
import {Character} from "../../shared/model/character.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {filter, map, switchMap} from "rxjs";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  id: number = 0;
  character!: Character;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => {
        return +params['id'];
      }),
      switchMap(id => {
        this.id = id;
        return this.store.select('characters')
      }),
      filter(characters => characters && characters.length != 0),
      map(characters => characters.find(character => character.id === this.id)),
    )
      .subscribe({
        next: character => {
          if (character) {
            this.character = character;
            return;
          }
          this.router.navigate(['characters']);
        },
        error: () => this.router.navigate(['characters'])
      });
  }

}
