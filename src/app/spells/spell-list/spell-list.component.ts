import {Component, OnInit} from '@angular/core';
import {Spell} from "../../shared/model/spell.model";
import {SpellsService} from "../../shared/service/spells.service";

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  panelOpenState = false;

  spellList: Spell[] = [];

  constructor(private spellsService: SpellsService) {
    this.loadSpellList();
  }

  ngOnInit(): void {
  }

  loadSpellList(): void {
    this.spellsService.getSpellList().subscribe(
      spellList => {
        this.spellList = spellList;
      }
    )
  }
}
