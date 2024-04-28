import { Injectable, signal } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { JOKE_CATEGORIES } from "../../config/joke-categories";

@Injectable()
export class MakeUsLaughPresenter {
  form!: FormGroup;

  setup = new FormControl('', [Validators.required]);

  punchline = new FormControl('', [Validators.required]);

  type = new FormControl('', [Validators.required]);

  jokeTypes = signal(JOKE_CATEGORIES);

  constructor() {
    this.form = new FormGroup({
      setup: this.setup,
      punchline: this.punchline,
      type: this.type,
    });
  }

}
