import { JokeModel } from "../http/jokes.model";

export type TSavedJoke = {
  [key: string]: JokeModel | undefined;
}
