import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader} from '@angular/material/card';
import {MatTable} from '@angular/material/table';
import {MatList, MatListItem} from '@angular/material/list';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-tier',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTable,
    MatList,
    MatListItem,
    MatCardFooter,
    NgIf
  ],
  templateUrl: './tier.component.html',
  standalone: true,
  styleUrl: './tier.component.scss'
})

export class TierComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() api_access: string | undefined;
  @Input() support: string | undefined;
  @Input() price: string| undefined;
}
