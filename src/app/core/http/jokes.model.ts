import { EStorageKeys } from "../enums/storage-keys.enum";
import { IJoke } from "../interfaces/joke.interface";
import { TSavedJoke } from "../types/liked-jokes.type";

export class JokeModel {
  id: number;
  punchline: string;
  setup: string;
  type: string;
  liked?: boolean;
  favorite?: boolean;
  score?: number;

  constructor(response: IJoke) {
    this.id = response.id
    this.punchline = response.punchline;
    this.setup = response.setup;
    this.type = response.type;
    this.liked = this.existInStorage(EStorageKeys.LIKED_JOKES, response.id);
    this.favorite = this.existInStorage(EStorageKeys.FAVORITE_JOKES, response.id);
  }

  private existInStorage(key: string, id: number): boolean {
    const jokesInStorage = <string>window.localStorage.getItem(key);

    if (!jokesInStorage) return false;

    const jokesList = <TSavedJoke>JSON.parse(jokesInStorage);

    return !!jokesList[id];
  }
}
