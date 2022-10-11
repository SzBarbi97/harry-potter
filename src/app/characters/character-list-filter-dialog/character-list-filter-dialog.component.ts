import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CharacterFilterWrapper} from "../../shared/model/character-filter-wrapper.model";
import {CharacterFilter} from "../../shared/model/character-filter.model";
import {Character} from "../../shared/model/character.model";
import {Hogwarts} from "../../shared/enums/hogwarts.enum";

@Component({
  selector: 'app-character-list-filter-dialog',
  templateUrl: './character-list-filter-dialog.component.html',
  styleUrls: ['./character-list-filter-dialog.component.css'],
})
export class CharacterListFilterDialogComponent implements OnInit {

  @ViewChild('f', {static: true}) filterForm?: NgForm;

  characterList: Character[];
  characterFilter: CharacterFilter;

  originalNameSet: Set<string> = new Set<string>();
  filteredNameSet: Set<string> = new Set<string>();
  houseSet: Set<string> = new Set<string>();
  originalSpeciesSet: Set<string> = new Set<string>();
  filteredSpeciesSet: Set<string> = new Set<string>();
  originalPatronusSet: Set<string> = new Set<string>();
  filteredPatronusSet: Set<string> = new Set<string>();
  originalAncestrySet: Set<string> = new Set<string>();
  filteredAncestrySet: Set<string> = new Set<string>();
  originalActorSet: Set<string> = new Set<string>();
  filteredActorSet: Set<string> = new Set<string>();


  constructor(public dialogRef: MatDialogRef<CharacterListFilterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public characterFilterWrapper: CharacterFilterWrapper) {
    this.characterList = characterFilterWrapper.characterList;
    this.characterFilter = JSON.parse(JSON.stringify(characterFilterWrapper.characterFilter));
  }

  ngOnInit(): void {
    this.fillSelectOptions();
    this.filter();
  }

  fillSelectOptions(): void {
    this.characterList
      .map(character => character.name)
      .sort()
      .forEach(name => {
        this.originalNameSet.add(name);
        this.filteredNameSet.add(name);
      });

    this.characterList
      .map(character => character.actor)
      .filter(actor => actor)
      .sort()
      .forEach(actor => {
        this.originalActorSet.add(actor);
        this.filteredActorSet.add(actor);
      });
    this.originalActorSet.add('Not known');
    this.filteredActorSet.add('Not known');

    if (this.houseSet) {
      this.characterList
        .map(character => character.house)
        .filter(house => house)
        .sort()
        .forEach(house => this.houseSet.add(house));
      this.houseSet.add('');
    }

    this.characterList
      .map(character => character.species)
      .sort()
      .forEach(species => {
        this.originalSpeciesSet.add(species);
        this.filteredSpeciesSet.add(species);
      });

    if (this.filteredPatronusSet) {
      this.characterList
        .map(character => character.patronus)
        .filter(patronus => patronus)
        .sort()
        .forEach(patronus => {
          this.originalPatronusSet.add(patronus);
          this.filteredPatronusSet.add(patronus);
        });
      this.originalPatronusSet.add('No patronus');
      this.filteredPatronusSet.add('No patronus');
    }

    if (this.filteredAncestrySet) {
      this.characterList
        .map(character => character.ancestry)
        .filter(ancestry => ancestry)
        .sort()
        .forEach(ancestry => {
          this.originalAncestrySet.add(ancestry);
          this.filteredAncestrySet.add(ancestry);
        });
      this.filteredAncestrySet.add('');
    }
  }

  filter() {
    if (this.characterFilter.name) {
      this.filterAutocompleteByName(this.characterFilter.name);
    }

    if (this.characterFilter.actor) {
      this.filterAutocompleteByActor(this.characterFilter.actor);
    }

    if (this.characterFilter.species) {
      this.filterAutoCompleteBySpecies(this.characterFilter.species);
    }

    if (this.characterFilter.patronus) {
      this.filterAutoCompleteByPatronus(this.characterFilter.patronus);
    }

    if (this.characterFilter.ancestry) {
      this.filterAutoCompleteByAncestry(this.characterFilter.ancestry);
    }

  }

  filterAutocompleteByName(filterName: string) {
    console.log('nameFilter');
    filterName = filterName || '';
    const filteredNames = Array.from(this.originalNameSet).filter(name => this.includes(name, filterName));
    this.filteredNameSet = new Set(filteredNames);
  }

  filterAutocompleteByActor(filterActor: string) {
    filterActor = filterActor || '';
    const filteredActors = Array.from(this.originalActorSet).filter(actor => this.includes(actor, filterActor));
    this.filteredActorSet = new Set(filteredActors);
  }

  filterAutoCompleteBySpecies(filterSpecies: string) {
    filterSpecies = filterSpecies || '';
    const filteredSpecies = Array.from(this.originalSpeciesSet)
      .filter(species => this.includes(species, filterSpecies));
    this.filteredSpeciesSet = new Set(filteredSpecies);
  }

  filterAutoCompleteByPatronus(filterPatronus: string) {
    filterPatronus = filterPatronus || '';
    const filteredPatronus = Array.from(this.originalPatronusSet)
      .filter(patronus => this.includes(patronus, filterPatronus));
    this.filteredPatronusSet = new Set(filteredPatronus);
  }

  filterAutoCompleteByAncestry(filterAncestry: string) {
    filterAncestry = filterAncestry || '';
    const filteredAncestry = Array.from(this.originalAncestrySet)
      .filter(ancestry => this.includes(ancestry, filterAncestry));
    this.filteredAncestrySet = new Set(filteredAncestry);
  }


  includes(param1: string, param2: string): boolean {
    return param1.toLowerCase().includes(param2.toLowerCase())
  }

  get Hogwarts(): typeof Hogwarts {
    return Hogwarts;
  }
}
