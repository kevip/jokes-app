import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { JokesHttp } from '../../http/jokes.http';
import { LayoutComponent } from '../../../shared/components/layout/layout.component';
import { JokeCardComponent } from '../../../shared/components/joke-card/joke-card.component';
import { take } from 'rxjs';
import { JokeModel } from '../../http/jokes.model';

@Component({
  selector: 'rj-jokes-category',
  standalone: true,
  imports: [LayoutComponent, JokeCardComponent],
  providers: [JokesHttp],
  templateUrl: './jokes-category.component.html',
  styleUrl: './jokes-category.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class JokesCategoryComponent implements OnInit {
  private readonly http = inject(JokesHttp);

  jokes: WritableSignal<JokeModel[]> = signal([]);

  @Input() category!: string;

  ngOnInit(): void {
    this.http.getJokesByCategory(this.category).pipe(take(1)).subscribe({
      next: jokes => this.jokes.set(jokes)
    });
  }
}
