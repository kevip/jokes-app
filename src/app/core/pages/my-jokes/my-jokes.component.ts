import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EStorageKeys } from '../../enums/storage-keys.enum';
import { JokeModel } from '../../http/jokes.model';
import { JokeCardComponent } from '../../../shared/components/joke-card/joke-card.component';

@Component({
  selector: 'rj-my-jokes',
  standalone: true,
  imports: [RouterModule, JokeCardComponent],
  templateUrl: './my-jokes.component.html',
  styleUrl: './my-jokes.component.scss'
})
export default class MyJokesComponent implements OnInit {
  jokes: WritableSignal<JokeModel[]> = signal([]);

  ngOnInit(): void {
    const jokes = <string>window.localStorage.getItem(EStorageKeys.MY_JOKES);
    const jokeList = jokes ? <JokeModel[]>JSON.parse(jokes) : [];

    this.jokes.set(jokeList);
  }
}
