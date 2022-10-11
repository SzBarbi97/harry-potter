import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../../shared/model/character.model";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character!: Character;

  @Output('closeCharacterDetail') closeCharacterDetailEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  closeCharacterDetail(): void {
    this.closeCharacterDetailEventEmitter.emit();
  }
}
