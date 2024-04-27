import { TestBed } from '@angular/core/testing';

import { JokesHttp } from './jokes.http';

describe('JokesHttp', () => {
  let service: JokesHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
