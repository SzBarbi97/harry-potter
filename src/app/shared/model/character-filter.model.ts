import {Hogwarts} from "../enums/hogwarts.enum";

export interface CharacterFilter {
  name?: string,
  actor?: string,
  gender?: string,
  house?: string,
  species?: string,
  patronus?: string,
  image?: boolean,
  birthDateFrom?: Date,
  birthDateTo?: Date,
  wizard?: boolean,
  ancestry?: string,
  alive?: boolean,
  hogwarts?: Hogwarts
}
