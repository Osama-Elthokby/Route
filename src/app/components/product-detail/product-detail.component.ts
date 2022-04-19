import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: any;
  id: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }


  ngOnInit(): void {
    this.getProduct();
  }
  /**
   * Gets product
   */
  getProduct(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get('id');
    if (this.id != null) {
      this.productService.getProduct(String(this.id))
        .subscribe(product => this.product = product);
    }

  }
  /**
   * Go back
   */
  goBack(): void {
    this.location.back();
  }


}
