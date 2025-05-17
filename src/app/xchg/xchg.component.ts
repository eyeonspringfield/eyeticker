import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {Firestore, collection, collectionData, addDoc, deleteDoc, doc, updateDoc} from '@angular/fire/firestore';
import {NgForOf, NgIf} from '@angular/common';
import { TickerComponent } from './ticker/ticker.component';
import { Timestamp } from 'firebase/firestore';
import {Auth, onAuthStateChanged, User} from '@angular/fire/auth';

@Component({
  selector: 'app-xchg',
  standalone: true,
  imports: [
    NgForOf,
    TickerComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './xchg.component.html',
  styleUrls: ['./xchg.component.scss']
})
export class XchgComponent implements OnInit {
  tickers: any[] = [];
  tickerForm: FormGroup;
  editingTickerId: string | null = null;
  user: User | null = null;

  private fb = inject(FormBuilder);
  private firestore = inject(Firestore);
  private auth = inject(Auth);

  constructor() {
    this.tickerForm = this.fb.group({
      symbol: ['', Validators.required],
      companyName: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });

    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    const tickerRef = collection(this.firestore, 'tickers');
    collectionData(tickerRef, { idField: 'id' }).subscribe(data => {
      this.tickers = data;
    });
  }

  async deleteTicker(ticker: any): Promise<void> {
    if (!this.user) return;
    if (!ticker.id) return;
    const tickerDoc = doc(this.firestore, `tickers/${ticker.id}`);
    await deleteDoc(tickerDoc);
  }

  editTicker(ticker: any): void {
    if (!this.user) return;
    this.editingTickerId = ticker.id;
    this.tickerForm.patchValue({
      symbol: ticker.symbol,
      companyName: ticker.companyName,
      price: ticker.price
    });
  }

  async addTicker(): Promise<void> {
    if (!this.user || this.tickerForm.invalid) return;

    const { symbol, companyName, price } = this.tickerForm.value;
    const priceNum = parseFloat(price);
    const ticker = this.generateTickerObject(symbol, companyName, priceNum);

    const tickerRef = collection(this.firestore, 'tickers');

    if (this.editingTickerId) {
      const tickerDoc = doc(this.firestore, `tickers/${this.editingTickerId}`);
      await updateDoc(tickerDoc, ticker);
      this.editingTickerId = null;
    } else {
      await addDoc(tickerRef, ticker);
    }

    this.tickerForm.reset();
  }


  generateTickerObject(symbol: string, companyName: string, price: number): any {
    const previousClose = +(price + (Math.random() * 0.1 - 0.005)).toFixed(4);
    const change = +(price - previousClose).toFixed(4);
    const changePercent = +((change / previousClose) * 100).toFixed(2);
    const volume = Math.floor(Math.random() * 100_000_000);
    const open = +(previousClose + (Math.random() * 0.1 - 0.005)).toFixed(4);
    const high = +Math.max(price, open, previousClose).toFixed(4);
    const low = +Math.min(price, open, previousClose).toFixed(4);
    const lastUpdated = new Date().toISOString();
    const color = change < 0 ? 'red' : 'green';
    const trendIcon = change < 0 ? 'arrow-down' : 'arrow-up';
    const sparkline = Array.from({ length: 6 }, () =>
      +(price + (Math.random() * 0.01 - 0.005)).toFixed(4)
    );
    const historicalPrices = [
      { date: this.daysAgoISO(1), close: previousClose },
      { date: this.daysAgoISO(2), close: +(previousClose + 0.0013).toFixed(4) },
      { date: this.daysAgoISO(3), close: +(previousClose - 0.0023).toFixed(4) },
    ];

    return {
      symbol,
      companyName,
      price,
      change,
      changePercent,
      volume,
      open,
      high,
      low,
      previousClose,
      lastUpdated,
      exchange: 'Forex',
      currency: symbol.includes('/') ? symbol.split('/')[1] : 'USD',
      color,
      trendIcon,
      sparkline,
      historicalPrices
    };
  }

  private daysAgoISO(days: number): string {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
  }
}
