import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainComponent} from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eyeticker';
}
