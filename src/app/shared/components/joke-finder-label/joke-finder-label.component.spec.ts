import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeFinderLabelComponent } from './joke-finder-label.component';

describe('JokeFinderLabelComponent', () => {
  let component: JokeFinderLabelComponent;
  let fixture: ComponentFixture<JokeFinderLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JokeFinderLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokeFinderLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
