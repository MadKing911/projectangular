import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Products } from '../../model/products';
import { AsyncPipe, NgFor, NgIf, SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { BasketService } from '../../service/basket.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SlicePipe, NgFor, NgIf, AsyncPipe, RouterLink, ProductDetailsComponent, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: Products[] = [];
  filteredProducts: Products[] = [];
  basketService: BasketService = inject(BasketService);
  masterService: MasterService = inject(MasterService);
  categoryList: string[] = [];
  ngOnInit(): void {
    this.loadAllProducts()
  }
  loadAllProducts(): void {
    this.masterService.getAllProducts().subscribe((res: Products[]) => {
      this.productList = res;
      const categoryList: string[] = [];
      res.forEach(product => {
        if (product.categories) {
          categoryList.push(...product.categories)
        }
      });

      this.categoryList = Array.from(new Set(categoryList));
      this.filteredProducts = [...this.productList];
    })
  }
  filterByCategory(category: string): void {
    if (category) {
      this.filteredProducts = this.productList.filter((product) =>
        product.categories.includes(category)
      );
    } else {
      this.filteredProducts = [...this.productList];
    }
  }

  searchTerm: string = '';
  filterProducts(): void {
    let filtered = this.productList;

    // Apply search filter 
    if (this.searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredProducts = filtered;
  }
  addToCart(product: Products): void {
    this.basketService.addToCart(product); // Add product to the cart
  }
  isLoggedIn: boolean = false;
  checkLoginStatus(): void {
    const user = localStorage.getItem('currentUser');
    this.isLoggedIn = user !== null; // Set isLoggedIn based on whether currentUser exists
  }

}
