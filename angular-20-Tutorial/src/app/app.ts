import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './components/hello/hello';
import { Structural } from './Directives/structural/structural';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Hello,Structural],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-20-Tutorial');
}
