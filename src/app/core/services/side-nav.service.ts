import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private sideNavToggle = new Subject();

  sideNavToggle$ = this.sideNavToggle.asObservable();

  toggle(): void {
    this.sideNavToggle.next(null);
  }
}
