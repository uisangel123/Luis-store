import { productsService } from '@api/products.service';
import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {
  private readonly productSvc = inject(productsService);
  // products = this.productSvc.products;
}

