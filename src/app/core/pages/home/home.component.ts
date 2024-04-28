import { CUSTOM_ELEMENTS_SCHEMA, Component, Signal, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TCategory } from '../../types/category';
import { CategoryCardComponent } from '../../../shared/components/category-card/category-card.component';
import { JOKE_CATEGORIES } from '../../config/joke-categories';

@Component({
  selector: 'rj-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    CategoryCardComponent,
    RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HomeComponent {

  readonly categories: Signal<TCategory[]> = signal(JOKE_CATEGORIES);
}
