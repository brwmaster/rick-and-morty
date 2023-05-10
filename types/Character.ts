import { Location } from './Location';

export type CharactersResult = {
  characters: {
    results: Character[];
  };
};

export type CharacterResult = {
  character: Character;
};

export interface Character {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  location: Location;
}

export interface CharacterDetail {
  id: string;
}
