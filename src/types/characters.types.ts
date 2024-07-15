export type Welcome = {
  info: Info;
  results: Character[];
  error?: string;
};

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unknown = 'unknown',
}

export type Location = {
  name: string;
  url: string;
};

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export enum Status {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'unknown',
}
