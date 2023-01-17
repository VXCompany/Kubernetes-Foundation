import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Candidate} from './candidate';
import {Observable, of} from 'rxjs';
import {AppConfig} from 'src/app/app.config.service';
import { CANDIDATES } from './candidates-stub';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  apiURL = AppConfig.settings.endPointApiUrl;

  constructor(private http: HttpClient) {
  }

  getNext(): Observable<Candidate[]> {
    if (AppConfig.settings.useStub) {
      return of(CANDIDATES);
    }

    return this.http.get<Candidate[]>(`${this.apiURL}/candidates`);
  }
}