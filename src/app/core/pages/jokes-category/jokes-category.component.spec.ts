import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesCategoryComponent } from './jokes-category.component';

describe('JokesCategoryComponent', () => {
  let component: JokesCategoryComponent;
  let fixture: ComponentFixture<JokesCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokesCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
