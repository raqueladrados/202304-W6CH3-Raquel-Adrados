export interface Characters {
  id: number;
  name: string;
  house: string;
  age: number;
  alive: boolean;
  communicate: string;
  tvShow: string;
  emoji: string;
}
export interface King extends Characters {
  rulingYears: number;
}

export interface Counselor extends Characters {
  characterAdviced: string;
}

export interface Fighter extends Characters {
  weapon: string;
  skills: number;
}

export interface Squire extends Characters {
  knight: string;
  pelotismo: number;
}

export interface CharactersData extends Characters {
  rulingYears?: number;
  characterAdviced?: string;
  weapon?: string;
  skills?: number;
  knight?: string;
  pelotismo?: number;
}
