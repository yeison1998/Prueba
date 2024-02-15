import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHero } from '../models/super-hero';

const ENDPOINT = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http: HttpClient) { }

  getHeros(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${ENDPOINT}superHeros`)
  }
}
