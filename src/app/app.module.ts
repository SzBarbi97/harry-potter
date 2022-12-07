import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {CharacterListComponent} from './characters/character-list/character-list.component';
import {HttpClientModule} from "@angular/common/http";
import {SpellListComponent} from './spells/spell-list/spell-list.component';
import {ImageSrcDirective} from "./shared/directive/image-src.directive";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FooterComponent} from './shared/components/footer/footer.component';
import {CharacterDetailComponent} from './characters/character-detail/character-detail.component';
import {CharactersComponent} from './characters/characters.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {CharacterListFilterComponent} from './characters/character-list-filter/character-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterListComponent,
    SpellListComponent,
    ImageSrcDirective,
    FooterComponent,
    CharacterDetailComponent,
    CharactersComponent,
    CharacterListFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
