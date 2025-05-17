// ticker.service.ts
import { Injectable } from '@angular/core';
import { collection, collectionData, addDoc, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Ticker } from './ticker';

@Injectable({
  providedIn: 'root'
})
export class TickerService {
  constructor(private firestore: Firestore) {}

  getTickers(): Observable<Ticker[]> {
    const tickerRef = collection(this.firestore, 'tickers');
    return collectionData(tickerRef, { idField: 'id' }) as Observable<Ticker[]>;
  }

  addTicker(ticker: Ticker) {
    const tickerRef = collection(this.firestore, 'tickers');
    return addDoc(tickerRef, ticker);
  }
}
