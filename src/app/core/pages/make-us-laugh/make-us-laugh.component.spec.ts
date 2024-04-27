import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUsLaughComponent } from './make-us-laugh.component';

describe('MakeUsLaughComponent', () => {
  let component: MakeUsLaughComponent;
  let fixture: ComponentFixture<MakeUsLaughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeUsLaughComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeUsLaughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
