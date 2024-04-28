import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { take } from 'rxjs';
import { JokesHttp } from '../../http/jokes.http';
import { JokeCardComponent } from '../../../shared/components/joke-card/joke-card.component';
import { JokeModel } from '../../http/jokes.model';
import { EViewTypes } from '../../enums/view-types.enum';
import { JokesTableComponent } from '../../../shared/components/jokes-table/jokes-table.component';

@Component({
  selector: 'rj-jokes-category',
  standalone: true,
  imports: [JokeCardComponent, MatIconModule, MatButtonModule, JokesTableComponent],
  providers: [JokesHttp],
  templateUrl: './jokes-category.component.html',
  styleUrl: './jokes-category.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class JokesCategoryComponent implements OnInit {
  private readonly http = inject(JokesHttp);

  jokes: WritableSignal<JokeModel[]> = signal([]);

  viewTypes = EViewTypes;

  viewType: WritableSignal<EViewTypes> = signal(EViewTypes.GRID);

  @Input() category!: string;

  ngOnInit(): void {
    this.http.getJokesByCategory(this.category).pipe(take(1)).subscribe({
      next: jokes => this.jokes.set(jokes)
    });
  }

  toggleView(): void {
    this.viewType.set(
      this.viewType() === EViewTypes.CARDS ? EViewTypes.GRID : EViewTypes.CARDS
    );
  }
}
