import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutComponent } from '../../../shared/components/layout/layout.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'rj-make-us-laugh',
  standalone: true,
  imports: [
    LayoutComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './make-us-laugh.component.html',
  styleUrl: './make-us-laugh.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class MakeUsLaughComponent {

  private router = inject(Router);

  form!: FormGroup;

  setup = new FormControl('', [Validators.required]);

  punchline = new FormControl('', [Validators.required]);


  constructor() {
    this.form = new FormGroup({
      setup: this.setup,
      punchline: this.punchline,
    })
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.router.navigate(['/']);
    }
  }
}
