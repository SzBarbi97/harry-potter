import {Wand} from "./wand.model";

export class Character {
  constructor(public name: string,
              public alternate_names: string[],
              public species: string,
              public gender: string,
              public house: string,
              public dateOfBirth: string,
              public yearOfBirth: number,
              public wizard: boolean,
              public ancestry: string,
              public eyeColour: string,
              public hairColour: string,
              public wand: Wand,
              public patronus: string,
              public hogwartsStudent: boolean,
              public hogwartsStaff: boolean,
              public actor: string,
              public alternate_actors: string[],
              public alive: boolean,
              public image: string
  ) {
  }
}
