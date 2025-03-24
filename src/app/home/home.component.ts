import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {TierComponent} from './tier/tier.component';
import {Tier} from './tier/tier';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelHeader} from '@angular/material/expansion';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCard, MatCardContent, MatCardHeader, TierComponent, NgForOf, MatButton, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, RouterLink],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  TIERS: Tier[] = [
    {title: "Free", description: "For the casual trader", price: "Free", api_access: "Up to 5 updates per minute", support: "Standard support"},
    {title: "Premium", description: "Premium access, low price", price: "15 EUR/month", api_access:"Up to 1 update per second", support: "Premium live support during trading hours"},
    {title: "Premium Expert", description: "Ultimate service for the ultimate trader", price: "75 EUR/month", api_access: "Real-time market data", support: "Exclusive 24/7 personal support"},
  ];

  tierDataSource = this.TIERS;
}
