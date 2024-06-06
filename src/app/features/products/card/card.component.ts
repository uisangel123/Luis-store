import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { product } from '@shared/models/products.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [SlicePipe,RouterLink,CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  product = input.required<product>();
  @Output() addToCartEvent = new EventEmitter<product>();

  onAddToCart(): void{
    this.addToCartEvent.emit(this.product());
  }
}
