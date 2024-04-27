import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { JokeModel } from '../../../core/http/jokes.model';
import { TSavedJoke } from '../../../core/types/liked-jokes.type';
import { EStorageKeys } from '../../../core/enums/storage-keys.enum';

@Component({
  selector: 'rj-joke-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent {

  @Input() joke!: JokeModel;

  toggleLike(): void {
    const likedJokes = <string>window.localStorage.getItem(EStorageKeys.LIKED_JOKES);
    const jokesList = likedJokes ? <TSavedJoke>JSON.parse(likedJokes) : {};

    this.joke.liked = !jokesList[this.joke.id];
    jokesList[this.joke.id] = !jokesList[this.joke.id] ? this.joke : undefined;

    window.localStorage.setItem(EStorageKeys.LIKED_JOKES, JSON.stringify(jokesList));
  }

  toggleStar(): void {
    const favoriteJokes = <string>window.localStorage.getItem(EStorageKeys.FAVORITE_JOKES);
    const jokesList = favoriteJokes ? <TSavedJoke>JSON.parse(favoriteJokes) : {};

    this.joke.favorite = !jokesList[this.joke.id];
    jokesList[this.joke.id] = !jokesList[this.joke.id] ? this.joke : undefined;

    window.localStorage.setItem(EStorageKeys.FAVORITE_JOKES, JSON.stringify(jokesList));
  }

}
