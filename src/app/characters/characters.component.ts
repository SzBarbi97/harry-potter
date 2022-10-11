import {Component, OnInit} from '@angular/core';
import {Character} from "../shared/model/character.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characterListEnabled: boolean = true;
  character: Character | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  openCharacterDetail(character: Character): void {
    this.characterListEnabled = false;
    this.character = character;
  }

  closeCharacterDetail(): void {
    this.characterListEnabled = true;
    this.character = null;
  }

}
