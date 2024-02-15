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
    return this.http.get<SuperHero[]>(`${ENDPOINT}superHeros`);
  }

  getHeroyId(heroId: string): Observable<SuperHero> {
    return this.http.get<SuperHero>(`${ENDPOINT}superHeros/${heroId}`);
  }


  createHero(hero: SuperHero): Observable<SuperHero> {
    return this.http.post<SuperHero>(`${ENDPOINT}superHeros`, hero);
  }

  updateHero(heroId: string, hero: SuperHero): Observable<SuperHero> {
    return this.http.put<SuperHero>(`${ENDPOINT}superHeros/${heroId}`, hero);
  }

  deleteHero(heroId: string): Observable<SuperHero> {
    return this.http.delete<SuperHero>(`${ENDPOINT}superHeros/${heroId}`);
  }
}
