import {Component, OnDestroy, OnInit} from '@angular/core';
import {Character} from "../../shared/model/character.model";
import {CharacterFilter} from "../../shared/model/character-filter.model";
import {Hogwarts} from "../../shared/enums/hogwarts.enum";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit, OnDestroy {

  private loadCharactersSub?: Subscription;

  originalCharacterList: Character[] = [];
  filteredCharacterList: Character[] = [];

  characterFilter: CharacterFilter = {};

  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute
  ) {
    this.loadCharacterList();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.loadCharactersSub?.unsubscribe();
  }

  loadCharacterList(): void {
    this.loadCharactersSub = this.store.pipe(select('characters'))
      .subscribe(
        characterList => {
          this.originalCharacterList = characterList;
          this.filteredCharacterList = characterList;
        }
      );
  }

  openCharacterDetail(actualCharacter: Character): void {
    this.router.navigate([actualCharacter.id], {relativeTo: this.route});
  }

  filter(characterFilter: CharacterFilter): void {
    this.characterFilter = characterFilter;
    this.filteredCharacterList = this.originalCharacterList;

    if (this.characterFilter.name) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => this.includes(character.name!, this.characterFilter.name!));
    }

    if (this.characterFilter.actor === 'Not known') {
      this.filteredCharacterList = this.filteredCharacterList.filter(character => character.actor === '');
    } else if (this.characterFilter.actor) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => this.includes(character.actor!, this.characterFilter.actor!));
    }

    if (this.characterFilter.gender) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => character.gender === this.characterFilter.gender);
    }

    if (this.characterFilter.house) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => character.house === this.characterFilter.house);
    }

    if (this.characterFilter.species || this.characterFilter.species === '') {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => this.includes(character.species!, this.characterFilter.species!));
    }

    if (this.characterFilter.patronus === 'No patronus') {
      this.filteredCharacterList = this.filteredCharacterList.filter(character => character.patronus === '');
    } else if (this.characterFilter.patronus) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => this.includes(character.patronus!, this.characterFilter.patronus!));
    }

    if (typeof this.characterFilter.image === 'boolean') {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => this.characterFilter.image ? character.image : !character.image);
    }

    if (this.characterFilter.birthDateFrom) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => {
          if (character.dateOfBirth) {
            return this.getDate(character.dateOfBirth) >= this.characterFilter.birthDateFrom!;
          }
          return false;
        });
    }

    if (this.characterFilter.birthDateTo) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => {
          if (character.dateOfBirth) {
            return this.getDate(character.dateOfBirth) <= this.characterFilter.birthDateTo!;
          }
          return false;
        });
    }

    if (typeof this.characterFilter.wizard === 'boolean') {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => character.wizard === this.characterFilter.wizard);
    }

    if (this.characterFilter.ancestry) {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => this.includes(character.ancestry!, this.characterFilter.ancestry!));
    } else if (this.characterFilter.ancestry === '') {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => character.ancestry === this.characterFilter.ancestry);
    }

    if (typeof this.characterFilter.alive === 'boolean') {
      this.filteredCharacterList = this.filteredCharacterList
        .filter(character => character.alive === this.characterFilter.alive);
    }

    if (this.characterFilter.hogwarts) {
      switch (this.characterFilter.hogwarts) {
        case Hogwarts.STUDENT:
          this.filteredCharacterList = this.filteredCharacterList.filter(character => character.hogwartsStudent);
          break;
        case Hogwarts.STAFF:
          this.filteredCharacterList = this.filteredCharacterList.filter(character => character.hogwartsStaff);
          break;
        case Hogwarts.NONE:
          this.filteredCharacterList = this.filteredCharacterList
            .filter(character => !character.hogwartsStudent && !character.hogwartsStaff);
          break;
      }
    }
  }

  includes(param1: string, param2: string): boolean {
    return param1.toLowerCase().includes(param2.toLowerCase())
  }

  getDate(dateString: string): Date {
    const dateArray = dateString.split('-');
    return new Date(+dateArray[2], +dateArray[1], +dateArray[0]);
  }
}
