import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellListComponent} from "./spells/spell-list/spell-list.component";
import {CharactersComponent} from "./characters/characters.component";

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'spells', component: SpellListComponent},
  {path: '**', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
