import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IJoke } from '../interfaces/joke.interface';
import { environment } from '../../../environments/environment.development';
import { JokeModel } from './jokes.model';

@Injectable({
  providedIn: 'root'
})
export class JokesHttp {

  constructor(private http: HttpClient) { }

  getJokesByCategory(category: string): Observable<JokeModel[]> {
    const endpoint = `${environment.apiUrl}/jokes/${category}/ten`;

    return this.http.get<IJoke[]>(endpoint, {}).pipe(
      map(jokes => jokes.map(joke => new JokeModel(joke)))
    );
  }


}
