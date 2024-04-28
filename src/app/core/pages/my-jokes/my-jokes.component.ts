import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EStorageKeys } from '../../enums/storage-keys.enum';
import { JokeModel } from '../../http/jokes.model';
import { JokeCardComponent } from '../../../shared/components/joke-card/joke-card.component';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'rj-my-jokes',
  standalone: true,
  imports: [RouterModule, JokeCardComponent],
  templateUrl: './my-jokes.component.html',
  styleUrl: './my-jokes.component.scss'
})
export default class MyJokesComponent implements OnInit {
  jokes: WritableSignal<JokeModel[]> = signal([]);

  service = inject(JokesService);

  ngOnInit(): void {
    const jokes = this.service.getUserJokes();
    this.jokes.set(jokes);
  }
}
