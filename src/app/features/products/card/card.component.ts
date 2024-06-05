import { Component, input } from '@angular/core';
import { product } from '@shared/models/products.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<product>();
}
