import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesTableComponent } from './jokes-table.component';

describe('JokesTableComponent', () => {
  let component: JokesTableComponent;
  let fixture: ComponentFixture<JokesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
