import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DecimalPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Ticker} from './ticker';
import {MaxSparkPipe} from '../../max-spark.pipe';

@Component({
  selector: 'app-ticker',
  imports: [
    NgClass,
    DecimalPipe,
    NgForOf,
    MaxSparkPipe,
    NgIf
  ],
  templateUrl: './ticker.component.html',
  standalone: true,
  styleUrl: './ticker.component.scss'
})
export class TickerComponent {
  @Input() ticker!: Ticker;
  @Input() isLoggedIn: boolean = false;
  @Output() edit = new EventEmitter<Ticker>();
  @Output() delete = new EventEmitter<Ticker>();

  onEdit(): void {
    this.edit.emit(this.ticker);
  }

  onDelete(): void {
    this.delete.emit(this.ticker);
  }
}
