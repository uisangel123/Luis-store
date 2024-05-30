import { CommonModule } from '@angular/common';
import { product } from './shared/models/products.interface';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productsService } from '@api/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'luis-store';
  private readonly productSvc = inject(productsService);
  products = this.productSvc.products;
}
