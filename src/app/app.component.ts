import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './services/nasa.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'nasa';
  img!: string;
  alt!: string;
  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe({
      next: (data) => {
        console.table(data);
        this.img = data.hdurl;
        this.alt = data.explanation;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        console.log('done');
      },
    });
  }
}
