import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellListComponent} from "./spells/spell-list/spell-list.component";
import {CharactersComponent} from "./characters/characters.component";
import {CharacterResolver} from "./shared/resolver/character.resolver";
import {CharacterDetailComponent} from "./characters/character-detail/character-detail.component";
import {CharacterListComponent} from "./characters/character-list/character-list.component";

const routes: Routes = [
  {
    path: 'characters', component: CharactersComponent, resolve: [CharacterResolver],
    children: [
      {path: '', component: CharacterListComponent},
      {path: ':id', component: CharacterDetailComponent},
    ]
  },
  {path: 'spells', component: SpellListComponent},
  {path: '**', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
