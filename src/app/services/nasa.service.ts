import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imod } from '../models/imod.model';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}
  private apiKey = 'odCYmHwwPX9juK161QI8XWxD43u6RqOzd7Jl1g7f';

  getImageOfTheDay(): Observable<Imod> {
    return this.http.get<Imod>(
      `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`
    );
  }
}
