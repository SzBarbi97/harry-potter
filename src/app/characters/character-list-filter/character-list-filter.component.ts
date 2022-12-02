import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Character} from "../../shared/model/character.model";
import {CharacterFilter} from "../../shared/model/character-filter.model";
import {Hogwarts} from "../../shared/enums/hogwarts.enum";
import {MatExpansionPanel} from "@angular/material/expansion";

@Component({
  selector: 'app-character-list-filter',
  templateUrl: './character-list-filter.component.html',
  styleUrls: ['./character-list-filter.component.css']
})
export class CharacterListFilterComponent implements OnInit {

  @ViewChild('f', {static: true}) filterForm?: NgForm;

  @ViewChild(MatExpansionPanel, {static: true}) matExpansionPanelElement!: MatExpansionPanel;

  @Input() characterFilter: CharacterFilter = {};

  @Input() characterList: Character[] = [];

  @Output("filter") filterEventEmitter: EventEmitter<CharacterFilter> = new EventEmitter<CharacterFilter>();


  originalNames: string[] = [];
  filteredNames: string[] = [];

  originalActors: string[] = [];
  filteredActors: string[] = [];

  houses: string[] = [];

  originalSpecies: string[] = [];
  filteredSpecies: string[] = [];

  originalPatronus: string[] = [];
  filteredPatronus: string[] = [];

  originalAncestry: string[] = [];
  filteredAncestry: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.characterFilter = JSON.parse(JSON.stringify(this.characterFilter));
    this.fillSelectOptions();
    this.filter();
  }

  onFilterClick(): void {
    //this.matExpansionPanelElement.close();
    this.filterEventEmitter.emit(this.characterFilter);
  }

  fillSelectOptions(): void {
    const originalNameSet = new Set<string>();
    this.characterList
      .map(character => character.name)
      .sort()
      .forEach(name => {
        originalNameSet.add(name);
      });
    this.originalNames = Array.from(originalNameSet);
    this.filteredNames = Array.from(originalNameSet);


    const originalActorSet = new Set<string>();
    this.characterList
      .map(character => character.actor)
      .filter(actor => actor)
      .sort()
      .forEach(actor => {
        originalActorSet.add(actor);
      });
    originalActorSet.add('Not known');
    this.originalActors = Array.from(originalActorSet);
    this.filteredActors = Array.from(originalActorSet);

    const houseSet = new Set<string>();
    this.characterList
      .map(character => character.house)
      .filter(house => house)
      .sort()
      .forEach(house => {
        houseSet.add(house)
      });
    houseSet.add('');
    this.houses = Array.from(houseSet);

    const originalSpeciesSet = new Set<string>();
    this.characterList
      .map(character => character.species)
      .sort()
      .forEach(species => {
        originalSpeciesSet.add(species);
      });
    this.originalSpecies = Array.from(originalSpeciesSet);
    this.filteredSpecies = Array.from(originalSpeciesSet);

    const originalPatronusSet = new Set<string>();
    this.characterList
      .map(character => character.patronus)
      .filter(patronus => patronus)
      .sort()
      .forEach(patronus => {
        originalPatronusSet.add(patronus);
      });
    originalPatronusSet.add('No patronus');
    this.originalPatronus = Array.from(originalPatronusSet);
    this.filteredPatronus = Array.from(originalPatronusSet);

    const originalAncestrySet = new Set<string>();
    this.characterList
      .map(character => character.ancestry)
      .filter(ancestry => ancestry)
      .sort()
      .forEach(ancestry => {
        originalAncestrySet.add(ancestry);
      });
    originalAncestrySet.add('');
    this.originalAncestry = Array.from(originalAncestrySet);
    this.filteredAncestry = Array.from(originalAncestrySet);

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
    filterName = filterName || '';
    this.filteredNames = this.originalNames.filter(name => this.includes(name, filterName));

    this.filterForm?.controls?.['name'].markAsTouched({
      onlySelf: true
    });
  }

  filterAutocompleteByActor(filterActor: string) {
    filterActor = filterActor || '';
    this.filteredActors = this.originalActors.filter(actor => this.includes(actor, filterActor));

    this.filterForm?.controls?.['actor'].markAsTouched({
      onlySelf: true
    });
  }

  filterAutoCompleteBySpecies(filterSpecies: string) {
    filterSpecies = filterSpecies || '';
    this.filteredSpecies = this.originalSpecies.filter(species => this.includes(species, filterSpecies));

    this.filterForm?.controls?.['species'].markAsTouched({
      onlySelf: true
    });
  }

  filterAutoCompleteByPatronus(filterPatronus: string) {
    filterPatronus = filterPatronus || '';
    this.filteredPatronus = this.originalPatronus.filter(patronus => this.includes(patronus, filterPatronus));

    this.filterForm?.controls?.['patronus'].markAsTouched({
      onlySelf: true
    });
  }

  filterAutoCompleteByAncestry(filterAncestry: string) {
    filterAncestry = filterAncestry || '';
    this.filteredAncestry = this.originalAncestry.filter(ancestry => this.includes(ancestry, filterAncestry));

    this.filterForm?.controls?.['ancestry'].markAsTouched({
      onlySelf: true
    });
  }

  includes(param1: string, param2: string): boolean {
    return param1.toLowerCase().includes(param2.toLowerCase())
  }

  get Hogwarts(): typeof Hogwarts {
    return Hogwarts;
  }
}
