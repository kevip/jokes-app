import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJoke } from '../interfaces/joke.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class JokesHttp {

  constructor(private http: HttpClient) { }

  getJokesByCategory(category: string): Observable<IJoke[]> {
    const endpoint = `${environment.apiUrl}/jokes/${category}/ten`;

    return this.http.get<IJoke[]>(endpoint, {});
  }


}
