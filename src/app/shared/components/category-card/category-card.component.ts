import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TCategory } from '../../../core/types/category';

@Component({
  selector: 'rj-category-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input() category!: TCategory;
}
