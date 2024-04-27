import { CUSTOM_ELEMENTS_SCHEMA, Component, Signal, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LayoutComponent } from '../../../shared/components/layout/layout.component';
import { TCategory } from '../../types/category';
import { CategoryCardComponent } from '../../../shared/components/category-card/category-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rj-home',
  standalone: true,
  imports: [MatCardModule, LayoutComponent, CategoryCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HomeComponent {

  readonly categories: Signal<TCategory[]> = signal([
    { name: 'programming' },
    { name: 'general' },
    { name: 'knock-knock' },
    { name: 'dad' },
  ]);
}
