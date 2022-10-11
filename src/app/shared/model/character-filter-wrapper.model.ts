import {Character} from "./character.model";
import {CharacterFilter} from "./character-filter.model";

export interface CharacterFilterWrapper {
  characterList: Character[],
  characterFilter: CharacterFilter
}
