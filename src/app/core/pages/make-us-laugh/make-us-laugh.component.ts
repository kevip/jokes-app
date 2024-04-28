import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { JokeModel } from '../../http/jokes.model';
import { EStorageKeys } from '../../enums/storage-keys.enum';
import { MakeUsLaughPresenter } from './make-us-laugh.presenter';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'rj-make-us-laugh',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [MakeUsLaughPresenter],
  templateUrl: './make-us-laugh.component.html',
  styleUrl: './make-us-laugh.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class MakeUsLaughComponent {
  private router = inject(Router);

  presenter = inject(MakeUsLaughPresenter);

  service = inject(JokesService);

  submit(): void {
    this.presenter.form.markAllAsTouched();
    if (this.presenter.form.valid) {
      const joke = <JokeModel>{
        id: new Date().valueOf(),
        punchline: this.presenter.punchline.value,
        setup: this.presenter.setup.value,
        type: this.presenter.type.value,
        liked: false,
        favorite: false,
      };

      this.service.saveJoke(joke);

      this.router.navigate(['/']);
    }
  }
}
