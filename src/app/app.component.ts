
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productsService } from '@api/products.service';
import { HeaderComponent } from './layouts/header/header.component';
import ProductsComponent from '@deatures/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,HeaderComponent,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'luis-store';
  // private readonly productSvc = inject(productsService);
  // products = this.productSvc.products;
}
