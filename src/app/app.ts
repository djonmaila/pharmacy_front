import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = '';

  constructor(private monService: ApiService) {}

  ngOnInit(): void {
    this.monService.creerUtilisateur().subscribe(data => {console.log(data);});
  }
}
