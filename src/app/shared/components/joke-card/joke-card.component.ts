import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import { JokeModel } from '../../../core/http/jokes.model';
import { EStorageKeys } from '../../../core/enums/storage-keys.enum';
import { JokesService } from '../../../core/services/jokes.service';

@Component({
  selector: 'rj-joke-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent implements OnChanges {
  jokeService = inject(JokesService);

  storageKeys = EStorageKeys;

  @Input() joke!: JokeModel;

  calculateJokeScore: (joke: JokeModel) => number = this.memoizeJokeScore();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['joke'] && this.joke) {
      this.joke.score = this.calculateJokeScore(this.joke);
    }
  }

  togglePreferred(key: EStorageKeys): void {
    const jokesList = this.jokeService.getPreferred(key);
    const preferredProperty = this.getPreferredPropertyByKey(key);

    this.joke[preferredProperty] = !jokesList[this.joke.id] as never;

    jokesList[this.joke.id] = !jokesList[this.joke.id] ? this.joke : undefined;

    this.jokeService.savePreferred(key, jokesList);
  }
  /**
   *
   * @description returns 'favorite' or 'liked' property from JokeModel depending on the parameter 'key'
   * @returns
   */
  getPreferredPropertyByKey(key: EStorageKeys): keyof JokeModel {
    const preferredPropertiesMap = {
      [EStorageKeys.FAVORITE_JOKES]: 'favorite',
      [EStorageKeys.LIKED_JOKES]: 'liked',
    } as { [key in EStorageKeys]: keyof JokeModel };

    return preferredPropertiesMap[key];
  }

  private memoizeJokeScore() {
    const scoreCache = new Map<number, number>();

    const executeScoreCalculation = (joke: JokeModel) => {
      // this is just an example with a random criteria to explain closures with memoization;
      return (joke.punchline.length + joke.setup.length) * joke.type.length / 10;
    }

    return (joke: JokeModel): number => {
      if (scoreCache.has(joke.id)) {
        return scoreCache.get(joke.id)!;
      }
      const score = executeScoreCalculation(joke);
      scoreCache.set(joke.id, score);
      return score;
    };
  }
}
