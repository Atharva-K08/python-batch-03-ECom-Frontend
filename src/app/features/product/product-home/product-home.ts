import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../../core/services/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-home',
  imports: [RouterLink],
  templateUrl: './product-home.html',
  styleUrl: './product-home.css',
})
export class ProductHome implements OnInit {
  catagories: any[] = [];
  subCategories: any[] = [];
  constructor(private productService: Product, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.productService.getProductCategories().subscribe((data:any) => {
      console.log(data);
      this.catagories = data;
    });
    this.productService.getProductSubCategories().subscribe((data:any) => {
      console.log(data);
      this.subCategories = data;
      this.cdr.detectChanges();
    });
  }
}
