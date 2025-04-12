import {Component, Input} from '@angular/core';
import {DecimalPipe, NgClass, NgForOf} from '@angular/common';
import {Ticker} from './ticker';
import {MaxSparkPipe} from '../../max-spark.pipe';

@Component({
  selector: 'app-ticker',
  imports: [
    NgClass,
    DecimalPipe,
    NgForOf,
    MaxSparkPipe
  ],
  templateUrl: './ticker.component.html',
  standalone: true,
  styleUrl: './ticker.component.scss'
})
export class TickerComponent {
  @Input() ticker!: Ticker;
}
