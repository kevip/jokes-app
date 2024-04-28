import { ComponentFixture, TestBed } from '@angular/core/testing';
import JokesCategoryComponent from './jokes-category.component';
import { JokesHttp } from '../../http/jokes.http';
import { JokeCardComponent } from '../../../shared/components/joke-card/joke-card.component';
import { JokesTableComponent } from '../../../shared/components/jokes-table/jokes-table.component';
import { of } from 'rxjs';
import { JokeModel } from '../../http/jokes.model';
import { EViewTypes } from '../../enums/view-types.enum';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('JokesCategoryComponent', () => {
  let component: JokesCategoryComponent;
  let fixture: ComponentFixture<JokesCategoryComponent>;
  let httpMock: jasmine.SpyObj<JokesHttp>;

  beforeEach(async () => {
    httpMock = jasmine.createSpyObj('JokesHttp', ['getJokesByCategory']);
    httpMock.getJokesByCategory.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      imports: [
        JokesCategoryComponent,
        JokeCardComponent,
        JokesTableComponent,
        HttpClientModule,
      ],
      providers: [JokesHttp],
    })
      .compileComponents();

    fixture = TestBed.createComponent(JokesCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when inititalize', () => {
    it('should initialize jokes on ngOnInit', () => {
      const category = 'programming';
      component.category = category;

      component.ngOnInit();

      expect(httpMock.getJokesByCategory).toHaveBeenCalledWith(category);
    });
    it('should initialize jokes on ngOnInit', () => {
      const category = 'programming';
      const response = [{
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
        "punchline": "No, cows go moo.",
        "id": 13
      }];
      const jokes = response.map(r => new JokeModel(r));
      component.category = category;
      httpMock.getJokesByCategory.and.returnValue(of(jokes));

      component.ngOnInit();

      expect(component.jokes()).toEqual(jokes);
    });
  });
  describe('When toggle view', () => {

    it('should toggle view type from GRID to CARDS', () => {
      const viewType = EViewTypes.GRID;
      component.viewType.set(viewType);

      component.toggleView();

      expect(component.viewType()).toEqual(EViewTypes.CARDS);
    });
    it('should toggle view type from CARDS to GRID', () => {
      const viewType = EViewTypes.CARDS;
      component.viewType.set(viewType);

      component.toggleView();

      expect(component.viewType()).toEqual(EViewTypes.GRID);
    });

    it('should display correct view type icon', () => {
      const button = fixture.debugElement.query(By.css('.joke-category__view-type'));
      const icon = button.query(By.css('mat-icon')).nativeElement;

      // Verifica el ícono inicial
      expect(icon.textContent).toContain('view_module');

      // Cambia la vista y verifica el cambio de ícono
      component.toggleView();
      fixture.detectChanges();
      expect(icon.textContent).toContain('view_headline');
    });
  })
});
