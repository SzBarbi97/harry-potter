import {Component, OnDestroy, OnInit} from '@angular/core';
import {Spell} from "../../shared/model/spell.model";
import {SpellsService} from "../../shared/service/spells.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit, OnDestroy {

  private loadSpellsSub?: Subscription;

  panelOpenState = false;

  spellList: Spell[] = [];

  constructor(private spellsService: SpellsService) {
    this.loadSpellList();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.loadSpellsSub?.unsubscribe();
  }

  loadSpellList(): void {
    this.loadSpellsSub = this.spellsService.getSpellList().subscribe(
      spellList => {
        this.spellList = spellList;
      }
    )
  }

}
