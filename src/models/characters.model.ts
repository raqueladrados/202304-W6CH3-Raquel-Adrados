export interface Character {
  id: number;
  name: string;
  house: string;
  age: number;
  alive: boolean;
  communicate: string;
  tvShow: string;
}
export interface King extends Character {
  rulingYears: number;
}

export interface Counselor extends Character {
  characterAdviced: string;
}

export interface Fighter extends Character {
  weapon: string;
  skills: number;
}

export interface Squire extends Character {
  knight: string;
  pelotismo: number;
}
