import {Wand} from "./wand.model";

export interface Character {
  id?: number,
  name?: string,
  alternate_names?: string[],
  species?: string,
  gender?: string,
  house?: string,
  dateOfBirth?: string,
  yearOfBirth?: number,
  wizard?: boolean,
  ancestry?: string,
  eyeColour?: string,
  hairColour?: string,
  wand?: Wand,
  patronus?: string,
  hogwartsStudent?: boolean,
  hogwartsStaff?: boolean,
  actor?: string,
  alternate_actors?: string[],
  alive?: boolean,
  image?: string
}
