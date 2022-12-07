import {CharacterListFilterComponent} from "./character-list-filter.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormControl} from "@angular/forms";
import {Hogwarts} from "../../shared/enums/hogwarts.enum";

describe('CharacterListFilterComponent', () => {
  let component: CharacterListFilterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterListFilterComponent],
      imports: [MatAutocompleteModule]
    }).compileComponents();

    const fixture: ComponentFixture<CharacterListFilterComponent> = TestBed.createComponent(CharacterListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  describe('fillSelectOptions()', () => {
    it('name setup', () => {
      component.characterList = [
        {name: 'Harry Potter'},
        {name: 'Hermione Granger'},
        {name: ''},
        {name: undefined},
      ];

      component.fillSelectOptions();

      const originalNames = component.originalNames;
      const filteredNames = component.filteredNames;

      expect(originalNames).toBeTruthy();
      expect(originalNames).toHaveSize(2);
      expect(originalNames).toContain('Harry Potter');
      expect(originalNames).toContain('Hermione Granger');

      expect(filteredNames).toBeTruthy();
      expect(originalNames).toHaveSize(2);
      expect(filteredNames).toContain('Harry Potter');
      expect(filteredNames).toContain('Hermione Granger');
    });

    it('actor setup', () => {
      component.characterList = [
        {actor: 'Dame Maggie Smith'},
        {actor: 'Robert Pattinson'}
      ];

      component.fillSelectOptions();

      const originalActors = component.originalActors;
      const filteredActors = component.filteredActors;

      expect(originalActors).toBeTruthy();
      expect(originalActors).toHaveSize(3);
      expect(originalActors).toContain('Dame Maggie Smith');
      expect(originalActors).toContain('Robert Pattinson');
      expect(originalActors).toContain('Not known');

      expect(filteredActors).toBeTruthy();
      expect(filteredActors).toHaveSize(3);
      expect(filteredActors).toContain('Dame Maggie Smith');
      expect(filteredActors).toContain('Robert Pattinson');
      expect(filteredActors).toContain('Not known');
    });

    it('house setup', () => {
      component.characterList = [
        {house: 'Gryffindor'},
        {house: 'Slytherin'}
      ];

      component.fillSelectOptions();

      const houses = component.houses;

      expect(houses).toBeTruthy();
      expect(houses).toHaveSize(3);
      expect(houses).toContain('Gryffindor');
      expect(houses).toContain('Slytherin');
      expect(houses).toContain('');
    });

    it('species setup', () => {
      component.characterList = [
        {species: 'human'},
        {species: 'cat'}
      ];

      component.fillSelectOptions();

      const originalSpecies = component.originalSpecies;
      const filteredSpecies = component.filteredSpecies;

      expect(originalSpecies).toBeTruthy();
      expect(originalSpecies).toHaveSize(2);
      expect(originalSpecies).toContain('human');
      expect(originalSpecies).toContain('cat');

      expect(filteredSpecies).toBeTruthy();
      expect(filteredSpecies).toHaveSize(2);
      expect(filteredSpecies).toContain('human');
      expect(filteredSpecies).toContain('cat');
    });

    it('patronus setup', () => {
      component.characterList = [
        {patronus: 'otter'},
        {patronus: 'stag'},
        {patronus: 'Jack Russell terrier'}
      ];

      component.fillSelectOptions();

      const originalPatronus = component.originalPatronus;
      const filteredPatronus = component.filteredPatronus;

      expect(originalPatronus).toBeTruthy();
      expect(originalPatronus).toHaveSize(4);
      expect(originalPatronus).toContain('otter');
      expect(originalPatronus).toContain('stag');
      expect(originalPatronus).toContain('Jack Russell terrier');
      expect(originalPatronus).toContain('No patronus');

      expect(filteredPatronus).toBeTruthy();
      expect(filteredPatronus).toHaveSize(4);
      expect(filteredPatronus).toContain('otter');
      expect(filteredPatronus).toContain('stag');
      expect(filteredPatronus).toContain('Jack Russell terrier');
      expect(filteredPatronus).toContain('No patronus');
    });

    it('ancestry setup', () => {
      component.characterList = [
        {ancestry: 'pure-blood'},
        {ancestry: 'half-blood'}
      ];

      component.fillSelectOptions();

      const originalAncestry = component.originalAncestry;
      const filteredAncestry = component.filteredAncestry;

      expect(originalAncestry).toBeTruthy();
      expect(originalAncestry).toHaveSize(3);
      expect(originalAncestry).toContain('pure-blood');
      expect(originalAncestry).toContain('half-blood');
      expect(originalAncestry).toContain('');

      expect(filteredAncestry).toBeTruthy();
      expect(filteredAncestry).toHaveSize(3);
      expect(filteredAncestry).toContain('pure-blood');
      expect(filteredAncestry).toContain('half-blood');
      expect(filteredAncestry).toContain('');

    });

  });

  describe('filter()', () => {
    it('name filter', () => {
      component.characterFilter = {
        name: 'har'
      };
      component.originalNames = ['Harry Potter', 'Hermione Granger', 'Alphard Black'];

      component.filter();

      const filteredNames = component.filteredNames;

      expect(filteredNames).toBeDefined();
      expect(filteredNames).toHaveSize(2);
      expect(filteredNames).toContain('Harry Potter');
      expect(filteredNames).toContain('Alphard Black');
    });

    it('actor filter', () => {
      component.characterFilter = {
        actor: 'alex'
      };
      component.originalActors = ['Alex Argenti', 'Emily Dale', 'Alex Crockford'];

      component.filter();

      const filteredActors = component.filteredActors;

      expect(filteredActors).toBeDefined();
      expect(filteredActors).toHaveSize(2);
      expect(filteredActors).toContain('Alex Argenti');
      expect(filteredActors).toContain('Alex Crockford');
    });

    it('species filter', () => {
      component.characterFilter = {
        species: 'd'
      };
      component.originalSpecies = ['dragon', 'cat', 'three-headed dog'];

      component.filter();

      const filteredSpecies = component.filteredSpecies;

      expect(filteredSpecies).toBeDefined();
      expect(filteredSpecies).toHaveSize(2);
      expect(filteredSpecies).toContain('dragon');
      expect(filteredSpecies).toContain('three-headed dog');
    });

    it('patronus filter', () => {
      component.characterFilter = {
        patronus: 'oa'
      };
      component.originalPatronus = ['boar', 'goat', 'horse'];

      component.filter();

      const filteredPatronus = component.filteredPatronus;

      expect(filteredPatronus).toBeDefined();
      expect(filteredPatronus).toHaveSize(2);
      expect(filteredPatronus).toContain('boar');
      expect(filteredPatronus).toContain('goat');
    });

    it('ancestry filter', () => {
      component.characterFilter = {
        ancestry: 'muggle'
      };
      component.originalAncestry = ['muggle', 'muggleborn', 'half-blood'];

      component.filter();

      const filteredAncestry = component.filteredAncestry;

      expect(filteredAncestry).toBeDefined();
      expect(filteredAncestry).toHaveSize(2);
      expect(filteredAncestry).toContain('muggle');
      expect(filteredAncestry).toContain('muggleborn');
    });
  });

  describe('validator', () => {
    it('name validator null', () => {
      const formControl = new FormControl('har');
      component.originalNames = ['Harry Potter', 'Hermione Granger', 'Alphard Black'];

      const validatorResult = component.nameValidator(formControl);

      const filteredNames = component.filteredNames;

      expect(filteredNames).toBeDefined();
      expect(filteredNames).toHaveSize(2);
      expect(filteredNames).toContain('Harry Potter');
      expect(filteredNames).toContain('Alphard Black');

      expect(validatorResult).toBeNull();
    });

    it('name validator invalid', () => {
      const formControl = new FormControl('har2');
      component.originalNames = ['Harry Potter', 'Hermione Granger', 'Alphard Black'];

      const validatorResult = component.nameValidator(formControl);

      const filteredNames = component.filteredNames;

      expect(filteredNames).toBeDefined();
      expect(filteredNames).toHaveSize(0);

      expect(validatorResult).toEqual({invalid: true});
    });

    it('actor validator null', () => {
      const formControl = new FormControl('alex');
      component.originalActors = ['Alex Argenti', 'Alex Croxford', 'Emily Dale'];

      const validatorResult = component.actorValidator(formControl);

      const filteredActors = component.filteredActors;

      expect(filteredActors).toBeDefined();
      expect(filteredActors).toHaveSize(2);
      expect(filteredActors).toContain('Alex Argenti');
      expect(filteredActors).toContain('Alex Croxford');

      expect(validatorResult).toBeNull();
    });

    it('actor validator invalid', () => {
      const formControl = new FormControl('alex2');
      component.originalActors = ['Alex Argenti', 'Alex Croxford', 'Emily Dale'];

      const validatorResult = component.actorValidator(formControl);

      const filteredActors = component.filteredActors;

      expect(filteredActors).toBeDefined();
      expect(filteredActors).toHaveSize(0);

      expect(validatorResult).toEqual({invalid: true});
    });

    it('gender validator null', () => {
      const formControl = new FormControl('');

      const validatorResult = component.genderValidator(formControl);

      expect(validatorResult).toBeNull();
    });

    it('gender validator invalid', () => {
      const formControl = new FormControl('v');

      const validatorResult = component.genderValidator(formControl);

      expect(validatorResult).toBeDefined();
      expect(validatorResult).toEqual({invalid: true});
    });

    it('house validator null', () => {
      const formControl = new FormControl('');

      const validatorResult = component.houseValidator(formControl);

      expect(validatorResult).toBeNull();
    });

    it('house validator invalid', () => {
      const formControl = new FormControl('v');

      const validatorResult = component.houseValidator(formControl);

      expect(validatorResult).toBeDefined();
      expect(validatorResult).toEqual({invalid: true});
    });

    it('species validator null', () => {
      const formControl = new FormControl('cat');
      component.originalSpecies = ['dragon', 'cat', 'giant'];

      const validatorResult = component.speciesValidator(formControl);

      const filteredSpecies = component.filteredSpecies;

      expect(filteredSpecies).toBeDefined();
      expect(filteredSpecies).toHaveSize(1);
      expect(filteredSpecies).toContain('cat');

      expect(validatorResult).toBeNull();
    });

    it('species validator invalid', () => {
      const formControl = new FormControl('cat2');
      component.originalSpecies = ['dragon', 'cat', 'giant'];

      const validatorResult = component.speciesValidator(formControl);

      const filteredSpecies = component.filteredSpecies;

      expect(filteredSpecies).toBeDefined();
      expect(filteredSpecies).toHaveSize(0);

      expect(validatorResult).toEqual({invalid: true});
    });

    it('patronus validator null', () => {
      const formControl = new FormControl('h');
      component.originalPatronus = ['hare', 'horse', 'doe'];

      const validatorResult = component.patronusValidator(formControl);

      const filteredPatronus = component.filteredPatronus;

      expect(filteredPatronus).toBeDefined();
      expect(filteredPatronus).toHaveSize(2);
      expect(filteredPatronus).toContain('hare');
      expect(filteredPatronus).toContain('horse');

      expect(validatorResult).toBeNull();
    });

    it('patronus validator invalid', () => {
      const formControl = new FormControl('h2');
      component.originalSpecies = ['hare', 'horse', 'doe'];

      const validatorResult = component.patronusValidator(formControl);

      const filteredPatronus = component.filteredPatronus;

      expect(filteredPatronus).toBeDefined();
      expect(filteredPatronus).toHaveSize(0);

      expect(validatorResult).toEqual({invalid: true});
    });

    it('ancestry validator null', () => {
      const formControl = new FormControl('muggle');
      component.originalAncestry = ['muggle', 'muggleborn', 'half-blood'];

      const validatorResult = component.ancestryValidator(formControl);

      const filteredAncestry = component.filteredAncestry;

      expect(filteredAncestry).toBeDefined();
      expect(filteredAncestry).toHaveSize(2);
      expect(filteredAncestry).toContain('muggle');
      expect(filteredAncestry).toContain('muggleborn');

      expect(validatorResult).toBeNull();
    });

    it('ancestry validator invalid', () => {
      const formControl = new FormControl('muggle2');
      component.originalAncestry = ['muggle', 'muggleborn', 'half-blood'];

      const validatorResult = component.ancestryValidator(formControl);

      const filteredAncestry = component.filteredAncestry;

      expect(filteredAncestry).toBeDefined();
      expect(filteredAncestry).toHaveSize(0);

      expect(validatorResult).toEqual({invalid: true});
    });

    it('hogwarts validator null', () => {
      const formControl = new FormControl(Hogwarts.STUDENT);

      const validatorResult = component.hogwartsValidator(formControl);

      expect(validatorResult).toBeNull();
    });

    it('hogwarts validator invalid', () => {
      const formControl = new FormControl('v');

      const validatorResult = component.hogwartsValidator(formControl);

      expect(validatorResult).toBeDefined();
      expect(validatorResult).toEqual({invalid: true});
    });
  });
});
