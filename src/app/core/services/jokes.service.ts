import { Injectable } from '@angular/core';
import { JokeModel } from '../http/jokes.model';
import { EStorageKeys } from '../enums/storage-keys.enum';
import { TSavedJoke } from '../types/liked-jokes.type';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  saveJoke(joke: JokeModel): void {
    const jokes = window.localStorage.getItem(EStorageKeys.MY_JOKES);
    const jokesList = jokes ? <JokeModel[]>JSON.parse(jokes) : [];

    jokesList.push(joke);
    window.localStorage.setItem(EStorageKeys.MY_JOKES, JSON.stringify(jokesList));
  }

  savePreferred(key: EStorageKeys, jokes: TSavedJoke): void {
    window.localStorage.setItem(key, JSON.stringify(jokes));
  }

  getUserJokes(): JokeModel[] {
    const jokes = <string>window.localStorage.getItem(EStorageKeys.MY_JOKES);

    return jokes ? <JokeModel[]>JSON.parse(jokes) : [];
  }

  getPreferred(category: EStorageKeys): TSavedJoke {
    const savedJokes = <string>window.localStorage.getItem(category);

    return savedJokes ? <TSavedJoke>JSON.parse(savedJokes) : {};
  }
}
