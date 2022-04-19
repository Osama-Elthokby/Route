import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  /**
   * Gets products
   */
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(p => {
        this.Products = p
      });
  }
  /**
   * Adds product
   * @param name
   * @returns add
   */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ name })
      .subscribe(product => {
        this.Products.push(product);
      });
  }
  /**
   * Deletes product
   * @param product
   */
  delete(product: any): void {
    this.Products = this.Products.filter(h => h !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }
}
