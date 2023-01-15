import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Candidate} from './candidate';
import {Observable, of} from 'rxjs';
import {CANDIDATES} from './candidates-stub';
import {AppConfig} from 'src/app/app.config.service';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  apiURL = AppConfig.settings.endPointApiUrl;

//  httpOptions = {
//    headers: new HttpHeaders({
//      'Content-Type': 'application/json',
//    }),
//  };

  constructor(private http: HttpClient) {
  }

  getNext(): Observable<Candidate> {
    if (AppConfig.settings.useStub) {
      return of(CANDIDATES[Math.floor(Math.random() * Math.floor(3))]);
    }

    return this.http.get<Candidate>(`${this.apiURL}/candidates/match`);
  }
}