import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '@envs/environment.development';
import { product } from '@shared/models/products.interface';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class productsService {
  // asignal con listado de productos que se van a mostrar
  public products = signal<product[]>([]);
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;

  constructor(){
    this.getProducts();
  }

  public getProducts(): void {
    this._http.get<product[]>(`${this._endPoint}/products/?sort=desc`)
    .pipe(tap((data: product[])=>this.products.set(data) ))
    .subscribe();
  }
  public getProductById(id: number){
    return this._http.get<product>(`${this._endPoint}/products/${id}`);

  }

}

