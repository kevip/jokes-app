import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { JokeModel } from '../../../core/http/jokes.model';
import { EStorageKeys } from '../../../core/enums/storage-keys.enum';
import { JokesService } from '../../../core/services/jokes.service';

@Component({
  selector: 'rj-joke-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './joke-card.component.html',
  styleUrl: './joke-card.component.scss'
})
export class JokeCardComponent {
  jokeService = inject(JokesService);

  storageKeys = EStorageKeys;

  @Input() joke!: JokeModel;

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
}
