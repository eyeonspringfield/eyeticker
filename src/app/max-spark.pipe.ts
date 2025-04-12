import { Pipe, PipeTransform } from '@angular/core';
import { Ticker } from './xchg/ticker/ticker';

@Pipe({
  standalone: true,
  name: 'maxSpark'
})
export class MaxSparkPipe implements PipeTransform {

  transform(ticker: Ticker): number {
    return ticker.sparkline && ticker.sparkline.length > 0
      ? Math.max(...ticker.sparkline)
      : 1;
  }
}
